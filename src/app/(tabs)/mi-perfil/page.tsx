"use client";

import React, { useState, useEffect } from 'react';
import { User, Mail, CreditCard, MapPin, Map } from 'lucide-react';
import { API_BASE_URL } from '@/config/api';

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

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      
      // Obtener user del localStorage
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        setError('No hay sesión iniciada');
        setLoading(false);
        return;
      }

      const user = JSON.parse(userStr);

      // Obtener accessToken del localStorage
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        setError('No hay token de acceso');
        setLoading(false);
        return;
      }

      // Fetch del perfil completo del usuario con Bearer token
      const profileResponse = await fetch(`${API_BASE_URL}/users/${user.id}/profile`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!profileResponse.ok) throw new Error('Error al cargar el perfil');
      const profileResult = await profileResponse.json();
      
      setProfileData(profileResult.data);
      console.log('Perfil completo del usuario:', profileResult.data);

      setLoading(false);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setLoading(false);
    }
  };

  // Obtener la mesa de votación (puede venir de voterProfile o tableMemberProfile)
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
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <p className="text-red-800 font-semibold">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
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

                {/* Mapa */}
                {votingTable.votingCenter.latitude && votingTable.votingCenter.longitude && (
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      width="100%"
                      height="300"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={`https://www.google.com/maps?q=${votingTable.votingCenter.latitude},${votingTable.votingCenter.longitude}&output=embed`}
                      allowFullScreen
                      title="Mapa del local de votación"
                    ></iframe>
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