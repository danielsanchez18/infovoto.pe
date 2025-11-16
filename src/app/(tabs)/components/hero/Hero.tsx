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

  const handleSend = () => {
    if (query.trim()) {
      router.push(`/chat?q=${encodeURIComponent(query)}`);
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
      {/* Círculo difuminado sutil detrás del título */}
      <div className="absolute -top-6 right-80 size-40 bg-primary/35 rounded-full blur-3xl pointer-events-none opacity-90 -z-40" />
      <div className="absolute -bottom-25 left-44 size-29 bg-primary/40 rounded-full blur-3xl pointer-events-none opacity-90 -z-40" />
      <div className="absolute -top-25 left-60 size-40 bg-primary/40 rounded-full blur-3xl pointer-events-none opacity-90 -z-40" />
      
      <h1 className="text-3xl font-bold relative z-10">
        ¿Conoces a los candidatos para las elecciones de 2026?
      </h1>
      <p className="text-lg text-gray-600 mt-1 max-w-3xl relative z-10">
        Realiza tus consultas sobre los candidatos y sus propuestas para tomar
        una decisión informada en las próximas elecciones.
      </p>
      <InputGroup className="mt-10 max-w-4xl w-full relative z-10 bg-white">
        <InputGroupTextarea
          placeholder="Pregunta, busca o consulta..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <InputGroupAddon align="block-end" className="justify-end">
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            disabled={!query.trim()}
            onClick={handleSend}
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}