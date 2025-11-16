"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Datos de ejemplo de candidatos
export const candidates = [
  {
    id: "1",
    name: "KEIKO SOFIA FUJIMORI FUJIMORI",
    party: "Fuerza Popular",
    image: "/img/keiko_example.png",
  },
  {
    id: "2",
    name: "RAFAEL LOPEZ ALIAGA",
    party: "Renovación Popular",
    image: "/img/lopez-aliaga-removebg-preview.png",
  },
  // Puedes agregar más candidatos aquí
];

interface SelectProfileProps {
  selectedCandidate: string;
  onSelectCandidate: (candidateId: string) => void;
  excludedCandidateIds?: string[];
}

export const SelectProfile = ({
  selectedCandidate,
  onSelectCandidate,
  excludedCandidateIds = [],
}: SelectProfileProps) => {
  const [open, setOpen] = useState(false);

  // Filtrar candidatos excluyendo los IDs especificados
  const availableCandidates = candidates.filter(
    (candidate) => !excludedCandidateIds.includes(candidate.id)
  );

  const selectedCandidateData = candidates.find(
    (candidate) => candidate.id === selectedCandidate
  );

  return (
    <div className="grid gap-y-10">
      {/* Select Profile */}
      <div className="grid gap-y-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 h-fit text-sm flex items-center justify-between hover:border-primary hover:bg-gray-50 font-normal"
            >
              {selectedCandidate
                ? selectedCandidateData?.name
                : "Seleccionar perfil"}
              <ChevronsUpDown className="ml-2 h-5 w-5 shrink-0 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="p-0"
            align="start"
            style={{ width: "var(--radix-popover-trigger-width)" }}
          >
            <Command>
              <CommandInput
                placeholder="Buscar por partido o candidato"
                className="h-10 w-full"
              />
              <CommandList>
                <CommandEmpty>No se encontraron candidatos.</CommandEmpty>
                <CommandGroup>
                  {availableCandidates.map((candidate) => (
                    <CommandItem
                      key={candidate.id}
                      value={`${candidate.name} ${candidate.party}`}
                      onSelect={() => {
                        if (candidate.id !== selectedCandidate) {
                          onSelectCandidate(candidate.id);
                        }
                        setOpen(false);
                      }}
                      className="flex items-center text-sm font-medium gap-x-2 px-3 py-3.5"
                    >
                      <div className="line-clamp-1 size-7 rounded-full bg-gray-600 contain-content overflow-hidden">
                        <img
                          src={candidate.image}
                          alt={candidate.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>{candidate.name}</span>
                      <span className="text-gray-500">-</span>
                      <span className="text-gray-600">{candidate.party}</span>
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedCandidate === candidate.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Profile Info */}
      {selectedCandidateData && (
        <div className="grid">
          {/* Detalles Básicos */}
          <div className="flex flex-col items-center justify-center gap-y-1">
            {/* Foto */}
            <div className="mb-3 size-80 contain-content overflow-hidden rounded-lg">
              <img
                src={selectedCandidateData.image}
                alt={selectedCandidateData.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-lg font-semibold line-clamp-2 lg:text-xl text-center">
              {selectedCandidateData.name}
            </h4>
            <p className="text-primary text-sm font-semibold uppercase">
              {selectedCandidateData.party}
            </p>
            <p className="text-gray-600 text-sm font-medium uppercase">
              Candidato presidencial
            </p>
          </div>
        </div>
      )}

      {!selectedCandidateData && (
        <div className="grid">
          <div className="flex flex-col items-center justify-center gap-y-4 py-12">
            <p className="text-gray-500 text-sm">
              Selecciona un candidato para ver su perfil
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
