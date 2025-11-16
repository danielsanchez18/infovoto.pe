"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim() || loading) return;

    try {
      setLoading(true);

      // ⚡ Crear chat en el backend
      const res = await fetch("/api/chats", {
        method: "POST",
        body: JSON.stringify({ question: query }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        console.error("Error creando chat");
        return;
      }

      const { chatId } = await res.json();

      // ⚡ Redirigir al chat recién creado con el mensaje inicial
      router.push(`/chat/${chatId}`);
    } catch (error) {
      console.error("Error en Hero:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center text-center mt-20 relative">
        <div className="absolute -top-6 right-80 size-40 bg-primary/40 rounded-full blur-3xl pointer-events-none opacity-90 -z-40 animate-pulse" />
        <div className="absolute -bottom-25 left-44 size-29 bg-primary/45 rounded-full blur-3xl pointer-events-none opacity-90 -z-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -top-25 left-60 size-40 bg-primary/45 rounded-full blur-3xl pointer-events-none opacity-90 -z-40 animate-pulse" style={{ animationDelay: '1s' }} />

      <h1 className="text-3xl font-bold relative z-10">
        ¿Conoces a los candidatos para las elecciones de 2026?
      </h1>

      <p className="text-lg text-gray-600 mt-1 max-w-3xl relative z-10">
        Realiza tus consultas sobre los candidatos y sus propuestas para tomar
        una decisión informada en las próximas elecciones. 🇵🇪
      </p>

      {/* Input del query */}
      <InputGroup className="mt-10 max-w-4xl w-full relative z-10 bg-white">
        <InputGroupTextarea
          placeholder="Coloca aquí tu consulta: (por ejemplo: ¿Qué candidato está a favor de derogar las leyes pro-crimen?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <InputGroupAddon align="block-end" className="justify-end">
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            disabled={!query.trim() || loading}
            onClick={handleSend}
          >
            {loading ? (
              <span className="animate-spin w-3 h-3 border-2 border-gray-500 border-t-transparent rounded-full" />
            ) : (
              <ArrowUpIcon />
            )}

            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
