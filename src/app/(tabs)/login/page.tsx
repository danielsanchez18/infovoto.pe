"use client";

import { useState } from 'react';
import { AtSign, Lock, LogIn } from 'lucide-react';
import { API_BASE_URL } from '@/config/api';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      
      console.log('Respuesta del servidor:', result);

      if (response.ok) {
        toast.success('Inicio de sesión exitoso');
        console.log('Access Token:', result.data.accessToken);
        localStorage.setItem('accessToken', result.data.accessToken);

        console.log('User Data:', result.data.user);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        window.location.href = '/';
        
      } else {
        toast.error(result.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al hacer fetch:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-full px-4 py-16">
      <div className="w-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Columna Izquierda - Formulario */}
          <div className="p-8 flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/img/decidepe-logo.png" 
                alt="Decide.PE" 
                className="h-42 w-auto"
              />
            </div>

            {/* Título */}
            <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              INICIAR SESIÓN
            </h1>

            {/* Formulario */}
            <div className="space-y-6">
              {/* Campo Correo */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese su correo"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Campo Contraseña */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese su contraseña"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Olvidé mi contraseña */}
              <div className="text-right">
                <button 
                  onClick={() => console.log('Recuperar contraseña')}
                  className="text-sm font-semibold hover:text-primary transition-colors"
                >
                  Olvidé mi contraseña
                </button>
              </div>

              {/* Botón Ingresar */}
              <button
                onClick={handleSubmit}
                className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3  border-2 bg-black text-white border-black font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                <LogIn className="h-5 w-5" />
                Ingresar
              </button>
            </div>
          </div>

          {/* Columna Derecha - Mascota */}
          <div className="hidden md:flex from-blue-50 to-gray-100 items-center justify-center p-12">
            <div className="relative">
              <img 
                src="/img/mascota-lupa.png" 
                alt="Mascota Decide.PE" 
                className="w-full max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}