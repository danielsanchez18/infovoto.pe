import { EllipsisVerticalIcon, Flag, Heart, MessageCircle, MessageCirclePlusIcon, Send, XCircle } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const PostCard = () => {
  return (
    <div className="rounded-lg border border-gray-200 w-full px-4 py-4 grid gap-y-5">
      {/* Perfil */}
      <div className="flex items-center gap-x-2">
        <div className="size-10 flex items-center justify-center overflow-hidden rounded-full">
          <img
            src="/img/lopez-aliaga-profile.png"
            alt="Foto de perfil de Rafael López Aliaga"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="">
          <p className="text-sm font-semibold">Rafael Lopez Aliaga</p>
          <p className="text-xs text-gray-600">Hace 2 horas</p>
        </div>
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button type="button" className="p-2 rounded-full hover:bg-gray-100">
                <EllipsisVerticalIcon className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <button className="px-2.5 py-1 flex items-center gap-x-2 hover:bg-gray-100">
                    <Flag className="size-4" />
                    Reportar publicación
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="px-2.5 py-1 flex items-center gap-x-2 hover:bg-gray-100">
                    <MessageCirclePlusIcon className="size-4" />
                    Añadir contexto
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="px-2.5 py-1 flex items-center gap-x-2 hover:bg-gray-100">
                    <XCircle className="size-4" />
                    No me interesa
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Parrafo */}
      <p className="text-sm">
        Nos complace anunciar nuestras nuevas propuestas para mejorar la
        educación en nuestra región. Con un enfoque en tecnología e innovación,
        buscamos brindar herramientas modernas a todos los estudiantes.
      </p>

      {/* Imagen */}
      <div className="h-96 bg-gray-300 rounded-md contain-content">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/education-conference-evD8W9FYkFP96Ajjb2dKzEs00YopsH.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Botones de interacción */}
      <div className="border-t pt-2 border-gray-300 grid grid-cols-3 gap-x-2">
        {/* Like Button */}
        <button className="py-3 w-full text-gray-600 flex items-center text-sm font-medium justify-center gap-x-2 hover:bg-gray-100 rounded-md hover:text-primary">
          <Heart className="size-4.5" />
          <span className="text-sm ">21,232 me gusta</span>
        </button>

        {/* Comment Button */}
        <button className="py-3 w-full text-gray-600 flex items-center text-sm font-medium justify-center gap-x-2 hover:bg-gray-100 rounded-md hover:text-primary">
          <MessageCircle className="size-4.5" />
          <span className="text-sm ">213 comentarios</span>
        </button>

        {/* Share Button */}
        <button className="py-3 w-full text-gray-600 flex items-center text-sm font-medium justify-center gap-x-2 hover:bg-gray-100 rounded-md hover:text-primary">
          <Send className="size-4.5" />
          <span className="text-sm ">Compartir</span>
        </button>
      </div>
    </div>
  );
};
