"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, User, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Sidebar() {
  const [userName, setUserName] = useState<string | null>(null);
  const [openInformacion, setOpenInformacion] = useState(false);
  const [openGuia, setOpenGuia] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <img 
              src="/img/logo.png" 
              alt="InfoVoto.pe" 
              className="h-10" 
            />
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-2">
          {/* Navegación Principal */}
          <div className="flex flex-col gap-2">
            <SheetClose asChild>
              <Link 
                href="/" 
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-semibold">Inicio</span>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link 
                href="/agrupaciones" 
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-semibold">Agrupaciones</span>
              </Link>
            </SheetClose>

            {/* Sección Información */}
            <div className="flex flex-col">
              <button
                onClick={() => setOpenInformacion(!openInformacion)}
                className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold">Información</span>
                {openInformacion ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {openInformacion && (
                <div className="flex flex-col gap-1 ml-4 mt-1">
                  <SheetClose asChild>
                    <Link
                      href="/informacion-candidatos"
                      className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                      onClick={handleLinkClick}
                    >
                      Información de Candidatos
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/informacion-partidos"
                      className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                      onClick={handleLinkClick}
                    >
                      Noticias
                    </Link>
                  </SheetClose>
                </div>
              )}
            </div>

            {/* Sección Guía */}
            <div className="flex flex-col">
              <button
                onClick={() => setOpenGuia(!openGuia)}
                className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold">Guía</span>
                {openGuia ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {openGuia && (
                <div className="flex flex-col gap-1 ml-4 mt-1">
                  <SheetClose asChild>
                    <Link
                      href="/guia-votacion"
                      className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                      onClick={handleLinkClick}
                    >
                      Voto informado
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/guia-candidatos"
                      className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                      onClick={handleLinkClick}
                    >
                      Tutorial
                    </Link>
                  </SheetClose>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t my-2" />

          {/* Botón de Login/Perfil */}
          <div className="px-4">
            {userName ? (
              <SheetClose asChild>
                <Link href="/mi-perfil" onClick={handleLinkClick}>
                  <Button className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    Perfil
                  </Button>
                </Link>
              </SheetClose>
            ) : (
              <SheetClose asChild>
                <Link href="/login" onClick={handleLinkClick}>
                  <Button className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    Iniciar Sesión
                  </Button>
                </Link>
              </SheetClose>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
