"use client";

import React, { useState, useEffect } from 'react';
import { User, Mail, CreditCard, MapPin, Map, WifiOff, RefreshCw, FileImage } from 'lucide-react';
import { API_BASE_URL } from '@/config/api';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type UserRole = 'ADMIN' | 'VOTER' | 'TABLE_MEMBER';

interface VotingCenter {
  id: number;
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  department?: string;
  province?: string;
  district?: string;
  sketchUrl?: string;
}

interface VotingTable {
  id: number;
  code: string;
  room?: string;
  floor?: string;
  votingCenter: VotingCenter;
}

interface VoterProfile {
  documentNumber: string;
  votingTableId?: number;
  votingTable?: VotingTable;
}

interface TableMemberProfile {
  roleInTable?: string;
  votingTableId?: number;
  votingTable?: VotingTable;
}

interface ProfileData {
  id: number;
  name: string;
  email?: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  voterProfile?: VoterProfile | null;
  tableMemberProfile?: TableMemberProfile | null;
}

const roleTranslations: Record<UserRole, string> = {
  ADMIN: 'Administrador',
  VOTER: 'Votante',
  TABLE_MEMBER: 'Miembro de Mesa'
};

const PROFILE_CACHE_KEY = 'cached_profile_data';
const CACHE_TIMESTAMP_KEY = 'profile_cache_timestamp';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [usingCache, setUsingCache] = useState(false);
  const [isSketchDialogOpen, setIsSketchDialogOpen] = useState(false);

  useEffect(() => {
    // Detectar si está offline
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    setIsOffline(!navigator.onLine);

    fetchProfileData();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getCachedProfile = (): ProfileData | null => {
    try {
      const cached = localStorage.getItem(PROFILE_CACHE_KEY);
      const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
      
      if (cached && timestamp) {
        const cacheAge = Date.now() - parseInt(timestamp);
        if (cacheAge < CACHE_DURATION) {
          return JSON.parse(cached);
        }
      }
      return null;
    } catch (err) {
      console.error('Error al leer cache:', err);
      return null;
    }
  };

  const setCachedProfile = (data: ProfileData) => {
    try {
      localStorage.setItem(PROFILE_CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    } catch (err) {
      console.error('Error al guardar cache:', err);
    }
  };

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Obtener user del localStorage
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        setError('No hay sesión iniciada');
        setLoading(false);
        return;
      }

      const user = JSON.parse(userStr);

      // Si está offline, usar cache inmediatamente
      if (!navigator.onLine) {
        const cachedData = getCachedProfile();
        if (cachedData) {
          setProfileData(cachedData);
          setUsingCache(true);
          setLoading(false);
          return;
        } else {
          setError('Sin conexión y sin datos guardados');
          setLoading(false);
          return;
        }
      }

      // Obtener accessToken del localStorage
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        setError('No hay token de acceso');
        setLoading(false);
        return;
      }

      // Intentar fetch del perfil
      try {
        const profileResponse = await fetch(`${API_BASE_URL}/users/${user.id}/profile`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!profileResponse.ok) throw new Error('Error al cargar el perfil');
        
        const profileResult = await profileResponse.json();
        const profileData = profileResult.data;
        
        // Guardar en cache
        setCachedProfile(profileData);
        
        setProfileData(profileData);
        setUsingCache(false);
        console.log('Perfil cargado desde el servidor');
      } catch (fetchError) {
        // Si falla el fetch, intentar usar cache
        const cachedData = getCachedProfile();
        if (cachedData) {
          setProfileData(cachedData);
          setUsingCache(true);
          console.log('Usando perfil desde cache (error de red)');
        } else {
          throw fetchError;
        }
      }

      setLoading(false);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchProfileData();
  };

  // Obtener la mesa de votación
  const getVotingTable = (): VotingTable | undefined => {
    if (profileData?.voterProfile?.votingTable) {
      return profileData.voterProfile.votingTable;
    }
    if (profileData?.tableMemberProfile?.votingTable) {
      return profileData.tableMemberProfile.votingTable;
    }
    return undefined;
  };

  const votingTable = getVotingTable();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
          <WifiOff className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <p className="text-red-800 font-semibold mb-2">Error: {error}</p>
          {isOffline && (
            <p className="text-sm text-red-600 mb-4">
              No hay conexión a internet. Intenta nuevamente cuando tengas conexión.
            </p>
          )}
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 mx-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Banner de estado de conexión */}
        {(isOffline || usingCache) && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            isOffline 
              ? 'bg-orange-50 border border-orange-200' 
              : 'bg-blue-50 border border-blue-200'
          }`}>
            <WifiOff className={`w-5 h-5 ${isOffline ? 'text-orange-600' : 'text-blue-600'}`} />
            <div className="flex-1">
              <p className={`font-semibold ${isOffline ? 'text-orange-800' : 'text-blue-800'}`}>
                {isOffline ? 'Sin conexión' : 'Mostrando datos guardados'}
              </p>
              <p className={`text-sm ${isOffline ? 'text-orange-600' : 'text-blue-600'}`}>
                {isOffline 
                  ? 'Estás viendo información guardada previamente'
                  : 'Los datos se actualizarán cuando tengas mejor conexión'
                }
              </p>
            </div>
            {!isOffline && (
              <button
                onClick={handleRetry}
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Actualizar
              </button>
            )}
          </div>
        )}

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mi Perfil</h1>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-6">
          {/* Columna Izquierda - Información */}
          <div className="space-y-6">
            {/* Datos Personales */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Datos personales</h2>
              
              <div className="space-y-4">
                {/* Nombre */}
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Nombre:</p>
                    <p className="text-lg text-gray-900">{profileData?.name || 'N/A'}</p>
                  </div>
                </div>

                {/* DNI */}
                {profileData?.voterProfile?.documentNumber && (
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-600">DNI:</p>
                      <p className="text-lg text-gray-900">{profileData.voterProfile.documentNumber}</p>
                    </div>
                  </div>
                )}

                {/* Correo */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Correo:</p>
                    <p className="text-lg text-gray-900">{profileData?.email || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos del Local de Votación */}
            {votingTable && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Datos del local de votación</h2>
                
                <div className="space-y-4 mb-6">
                  {/* Institución */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-600">Institución:</p>
                          <p className="text-lg text-gray-900 font-semibold">
                            {votingTable.votingCenter.name}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {votingTable.votingCenter.address}
                          </p>
                          {votingTable.votingCenter.district && (
                            <p className="text-xs text-gray-500 mt-1">
                              {votingTable.votingCenter.district}, {votingTable.votingCenter.province}, {votingTable.votingCenter.department}
                            </p>
                          )}
                        </div>
                        {votingTable.votingCenter.sketchUrl && (
                          <Dialog open={isSketchDialogOpen} onOpenChange={setIsSketchDialogOpen}>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="shrink-0">
                                <FileImage className="w-4 h-4 mr-2" />
                                Ver Croquis
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                              <DialogHeader>
                                <DialogTitle>Croquis del Local de Votación</DialogTitle>
                                <DialogDescription>
                                  {votingTable.votingCenter.name}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="mt-4">
                                <img 
                                  src={`${API_BASE_URL}${votingTable.votingCenter.sketchUrl}`}
                                  alt="Croquis del local de votación"
                                  className="w-full h-auto rounded-lg"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mesa */}
                  <div className="flex items-start gap-3">
                    <Map className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Mesa:</p>
                      <p className="text-lg text-gray-900 font-semibold">
                        Mesa N° {votingTable.code}
                      </p>
                      {(votingTable.room || votingTable.floor) && (
                        <p className="text-sm text-gray-600 mt-1">
                          {votingTable.room && `${votingTable.room}`}
                          {votingTable.room && votingTable.floor && ' - '}
                          {votingTable.floor && `${votingTable.floor}`}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mapa - Solo mostrar si hay conexión */}
                {votingTable.votingCenter.latitude && votingTable.votingCenter.longitude && (
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    {!isOffline ? (
                      <iframe
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://www.google.com/maps?q=${votingTable.votingCenter.latitude},${votingTable.votingCenter.longitude}&output=embed`}
                        allowFullScreen
                        title="Mapa del local de votación"
                      ></iframe>
                    ) : (
                      <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <MapPin className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm font-semibold">Mapa no disponible sin conexión</p>
                          <p className="text-xs mt-1">
                            Lat: {votingTable.votingCenter.latitude}, Lng: {votingTable.votingCenter.longitude}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Columna Derecha - Avatar y Rol */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center space-y-6">
            {/* Avatar */}
            <div className="w-48 h-48 rounded-full border-4 border-gray-200 flex items-center justify-center bg-gray-50">
              <User className="w-24 h-24 text-gray-400" />
            </div>

            {/* Rol */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {(profileData?.role && roleTranslations[profileData.role]) || 'USUARIO'}
              </h3>
              <p className="text-sm text-gray-600">Mi rol en estas elecciones</p>
            </div>

            {/* Información adicional según rol */}
            {profileData?.role === 'TABLE_MEMBER' && profileData?.tableMemberProfile && (
              <div className="w-full bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-blue-900">
                  {profileData.tableMemberProfile.roleInTable || 'Miembro de Mesa'}
                </p>
                {profileData.tableMemberProfile.votingTable && (
                  <p className="text-xs text-blue-700 mt-1">
                    Mesa N° {profileData.tableMemberProfile.votingTable.code}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}