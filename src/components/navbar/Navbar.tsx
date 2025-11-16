"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { LogIn, MapPinnedIcon, Search, User } from "lucide-react";
import SearchDialog from "../searchDialog/SearchDialog";
import RegionDialog from "../regionDialog";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Verificar si hay un usuario en localStorage
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserName(userData.nombre || userData.name || userData.email);
      } catch (error) {
        console.error("Error al parsear usuario:", error);
      }
    }
  }, []);

  return (
    <nav className="flex items-center gap-x-3 justify-between py-4 text-sm font-semibold">

      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center mb-2">
          <div className="h-7 flex items-center justify-center">
            <img src="/img/logo.png" alt="InfoVoto.pe Logo" className="w-full h-full" />
          </div>
        </Link>
        <Link href="/" >
          <p>Inicio</p>
        </Link>
        <Link href="/agrupaciones">
          <p>Agrupaciones</p>
        </Link>
        <p>Información</p>
        <p>Guía</p>
      </div>
          <img
            src="/img/DecidePE - Logo.png"
            alt="InfoVoto.pe Logo"
            className="w-full h-full"
          />
        </div>
      </Link>

      {/* Menú de opciones */}
      <div className="flex items-center gap-4">
        <SearchDialog />
        {userName ? (
          <Link href="/mi-perfil" className="flex items-center gap-x-2">
            <Button className="py-2">
              <span className="flex flex-row gap-2 items-center">
                Perfil
              </span>
            </Button>
          </Link>
        ) : (
          <Link href="/login" className="flex items-center gap-x-2">
            <Button className="py-2">
              <span className="flex flex-row gap-2 items-center">
                Iniciar Sesión
              </span>
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
