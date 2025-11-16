"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { LogIn, MapPinnedIcon, Search, User } from "lucide-react";
import SearchDialog from "../searchDialog/SearchDialog";
import RegionDialog from "../regionDialog";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Verificar si hay un usuario en localStorage
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserName(userData.nombre || userData.name || userData.email);
      } catch (error) {
        console.error('Error al parsear usuario:', error);
      }
    }
  }, []);

  return (
    <nav className="flex items-center gap-x-3 justify-between py-4">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-x-3">
        <div className="h-7 flex items-center justify-center">
          <img src="/img/DecidePE - Logo.png" alt="InfoVoto.pe Logo" className="w-full h-full" />
        </div>
      </Link>

      {/* Menú de opciones */}
      <div className="flex items-center gap-x-5">
        {userName ? (
          <div className="flex items-center gap-x-2">
            <span className="font-medium text-gray-700">
              Hola, <Link href={'/mi-perfil'} className="hover:underline cursor-pointer">{userName}</Link>
            </span>
            <User className="h-5 w-5 text-gray-600" />
          </div>
        ) : (
          <Link href="/login" className="flex items-center gap-x-2">
            <Button className="py-2">
              <span className="flex flex-row gap-2 items-center">
                Iniciar Sesión
                <User className="h-5 w-5" />
              </span>
            </Button>
          </Link>
        )}
      
      </div>
    </nav>
  );
};
