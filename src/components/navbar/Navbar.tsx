"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import SearchDialog from "../searchDialog/SearchDialog";
import { Sidebar } from "../sidebar";
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
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
      {/* Sidebar para móviles */}
      {isMounted && <Sidebar />}

      {/* Logo y navegación desktop */}
      <div className="flex items-center gap-1">
        <Link href="/" className="items-center mb-2 hidden lg:flex">
          <div className="h-7 flex items-center justify-center">
            <img src="/img/logo.png" alt="InfoVoto.pe Logo" className="w-full h-full" />
          </div>
        </Link>
        <Link href="/" className="hover:bg-gray-100 rounded-lg px-4 py-2 ml-2">
          <p>Inicio</p>
        </Link>
        <Link href="/agrupaciones" className="hover:bg-gray-100 rounded-lg px-4 py-2">
          <p>Agrupaciones</p>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Información</NavigationMenuTrigger>
              <NavigationMenuContent className="flex gap-2 w-full min-w-xs">
                <Link href="/informacion-candidatos" className="p-2 hover:bg-gray-100 rounded w-full">
                  <p>Información de Candidatos</p>
                </Link>
                <Link href="/informacion-partidos" className="p-2 hover:bg-gray-100 rounded w-full">
                  <p>Noticias</p>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Guía</NavigationMenuTrigger>
              <NavigationMenuContent className="w-full min-w-xs flex gap-2">
                <Link href="/guia-votacion" className="p-2 hover:bg-gray-100 rounded">
                  <p>Voto informado</p>
                </Link>
                <Link href="/guia-candidatos" className="p-2 hover:bg-gray-100 rounded">
                  <p>Tutorial</p>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

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
    </nav >
  );
};
