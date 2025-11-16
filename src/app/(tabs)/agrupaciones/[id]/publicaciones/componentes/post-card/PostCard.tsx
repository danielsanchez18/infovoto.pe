"use client";

import { useState, useEffect } from "react";
import { EllipsisVerticalIcon, Flag, Heart, MessageCircle, MessageCirclePlusIcon, Send, XCircle, Info } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  postId: string;
  content: string;
  authorName?: string;
}

export const PostCard = ({ postId, content, authorName }: PostCardProps) => {
  const [context, setContext] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [contribution, setContribution] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingContext, setIsLoadingContext] = useState(true);

  // Fetch del contexto al montar
  useEffect(() => {
    const fetchContext = async () => {
      try {
        setIsLoadingContext(true);
        const response = await fetch(`/api/posts/${postId}/context`);
        const data = await response.json();
        setContext(data.result || null);
      } catch (error) {
        console.error("Error al cargar contexto:", error);
      } finally {
        setIsLoadingContext(false);
      }
    };

    fetchContext();
  }, [postId]);

  // Función para añadir contribución
  const handleAddContribution = async () => {
    if (!contribution.trim()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch(`/api/posts/${postId}/contributions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: contribution,
          content: content,
          authorName: authorName || "Renovación Popular"
        }),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        // Actualizar el contexto con el resultado
        setContext(data.context);
        setContribution("");
        setIsDialogOpen(false);
      } else {
        alert(`Error: ${data.error || 'No se pudo guardar la contribución'}`);
        console.error("Error al añadir contribución:", data.error);
      }
    } catch (error) {
      alert('Error de red al añadir contribución');
      console.error("Error al añadir contribución:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="rounded-lg border border-gray-200 w-full px-4 py-4 grid gap-y-5">
      {/* Perfil */}
      <div className="flex items-center gap-x-2">
        <div className="size-10 flex items-center justify-center overflow-hidden rounded-full">
          <img
            src="https://imgs.search.brave.com/4ObaeoBgk19peQs1JELoqIbjqShZNOTA210yp2uVPTs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBlL0xvZ29fZGVf/UmVub3ZhY2klQzMl/QjNuX1BvcHVsYXJf/KFBlciVDMyVCQSku/cG5n"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="">
          <p className="text-sm font-semibold">Renovación Popular</p>
          <p className="text-xs text-gray-600">Hace 2 horas</p>
        </div>
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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
              <DropdownMenuItem onSelect={() => setIsDialogOpen(true)}>
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
        {content}
      </p>

      {/* Imagen */}
      <div className="h-96 bg-gray-300 rounded-md contain-content">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/education-conference-evD8W9FYkFP96Ajjb2dKzEs00YopsH.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contexto de la comunidad */}
      {!isLoadingContext && context && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-x-2">
            <Info className="size-5 text-blue-600 mt-0.5 shrink-0" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-blue-900 mb-1">
                Contexto de la comunidad
              </h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                {context}
              </p>
            </div>
          </div>
        </div>
      )}

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

      {/* Dialog para añadir contexto */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Añadir contexto a la publicación</DialogTitle>
            <DialogDescription>
              Comparte información adicional, verificable y neutral que ayude a otros usuarios a entender mejor esta publicación. Tu contribución será analizada junto con otras para generar un contexto de la comunidad.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="Escribe tu aporte aquí... (ej: fechas importantes, datos verificables, contexto histórico, etc.)"
              value={contribution}
              onChange={(e) => setContribution(e.target.value)}
              className="min-h-[120px]"
              disabled={isSubmitting}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={handleAddContribution}
              disabled={!contribution.trim() || isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar aporte"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
