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
    <nav className="flex items-center gap-x-3 justify-between py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-x-3">
        <div className="h-7 flex items-center justify-center">
<<<<<<< HEAD
          <img
            src="/img/DecidePE - Logo.png"
            alt="InfoVoto.pe Logo"
            className="w-full h-full"
          />
=======
          <img src="/img/logo.png" alt="InfoVoto.pe Logo" className="w-full h-full" />
>>>>>>> 085a7fb599a0b770cb7302648697d2523799760e
        </div>
      </Link>

      {/* Menú de opciones */}
      <div className="flex items-center gap-x-5">
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
