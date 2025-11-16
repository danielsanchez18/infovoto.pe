'use client';

import { BoxComments } from "../box-comments/BoxComments";
import {
  EllipsisVerticalIcon,
  Flag,
  Heart,
  MessageCircle,
  MessageCirclePlusIcon,
  XCircle,
  Send,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputComment } from "../input-comment/InputComment";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  status: string;
  authorId: number;
  candidateId: number;
  createdAt: string;
  updatedAt: string;
}

interface CandidateInfo {
  fullName: string;
  photoUrl: string;
}

interface PostCardProps {
  post: Post;
  candidateData: CandidateInfo;
}

const getTimeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInHours < 1) {
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    return `Hace ${diffInMinutes} minuto${diffInMinutes !== 1 ? 's' : ''}`;
  } else if (diffInHours < 24) {
    return `Hace ${diffInHours} hora${diffInHours !== 1 ? 's' : ''}`;
  } else if (diffInDays < 7) {
    return `Hace ${diffInDays} día${diffInDays !== 1 ? 's' : ''}`;
  } else {
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  }
};

export const PostCard = ({ post, candidateData }: PostCardProps) => {
  const [copied, setCopied] = useState(false);
  const postUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/post/${post.id}`;

  const copyLink = async () => {
    try {
      const el = document.getElementById("link") as HTMLInputElement | null;
      const text = el?.value ?? "";
      if (!text) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // fallback
        if (el) {
          el.select();
          document.execCommand("copy");
          // deselect
          (window.getSelection() as Selection)?.removeAllRanges();
        }
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar:", err);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 w-full px-4 py-4 grid gap-y-5">
      {/* Perfil */}
      <div className="flex items-center gap-x-2">
        <div className="size-10 flex items-center justify-center overflow-hidden rounded-full">
          <img
            src={candidateData.photoUrl}
            alt={`Foto de perfil de ${candidateData.fullName}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="">
          <p className="text-sm font-semibold">{candidateData.fullName}</p>
          <p className="text-xs text-gray-600">{getTimeAgo(post.createdAt)}</p>
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

      {/* Título */}
      {post.title && (
        <h3 className="text-base font-semibold">{post.title}</h3>
      )}

      {/* Contenido */}
      <p className="text-sm whitespace-pre-line">
        {post.content}
      </p>

      {/* Botones de interacción */}
      <div className="border-t pt-2 border-gray-300 grid grid-cols-3 gap-x-2">
        {/* Like Button */}
        <button className="py-3 w-full text-gray-600 flex items-center text-sm font-medium justify-center gap-x-2 hover:bg-gray-100 rounded-md hover:text-primary">
          <Heart className="size-4.5" />
          <span className="text-sm ">Me gusta</span>
        </button>

        {/* Comment Button */}
        <button className="py-3 w-full text-gray-600 flex items-center text-sm font-medium justify-center gap-x-2 hover:bg-gray-100 rounded-md hover:text-primary">
          <MessageCircle className="size-4.5" />
          <span className="text-sm ">Comentar</span>
        </button>

        {/* Share Button */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="py-3 w-full text-gray-600 flex items-center text-sm font-medium justify-center gap-x-2 hover:bg-gray-100 rounded-md hover:text-primary">
              <Send className="size-4.5" />
              <span className="text-sm ">Compartir</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Compartir enlace</DialogTitle>
              <DialogDescription>
                Cualquiera que tenga este enlace podrá verlo.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue={postUrl}
                  readOnly
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cerrar
                </Button>
              </DialogClose>
              <Button type="button" onClick={copyLink} aria-live="polite">
                {copied ? "Copiado" : "Copiar enlace"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Input de comentario */}
      {/* <InputComment /> */}

      {/* Caja de comentarios */}
      {/* <div className="grid gap-y-5">
        <div>
          <BoxComments />
        </div>

        <button className="text-sm font-semibold hover:underline text-primary">
          Ver más comentarios
        </button>
      </div> */}
    </div>
  );
};
