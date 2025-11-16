"use client";

import { useState } from "react";
import Link from "next/link";
import { SelectProfile } from './components/select-profile/SelectProfile';
import { GovernmentPlan } from './components/government-plan/GovernmentPlan';

export default function ComparadorPage() {
  const [candidate1, setCandidate1] = useState<string>("");
  const [candidate2, setCandidate2] = useState<string>("");

  return (
    <div className="flex flex-col gap-10 py-10">
      {/* Titulo */}
      <div className="grid gap-y-2">
        <h3 className="text-xl font-semibold text-center">
          Compara Perfiles y Propuestas
        </h3>

        <div className="flex items-center w-fit mx-auto gap-x-3">
          <Link
            href="/"
            className="text-sm text-primary flex items-center gap-x-1 hover:underline mx-auto font-semibold">
            Cambiar categoría
          </Link>

          <div className="text-gray-300">/</div>

          <Link
            href="/"
            className="text-primary text-sm flex items-center gap-x-1 hover:underline mx-auto font-semibold">
            Ver todos los perfiles
          </Link>
        </div>
      </div>

      {/* Contenido */}
      <section className="grid gap-y-20">
        
        {/* Seleccionar Perfiles a Comparar */}
        <div className="grid grid-cols-2 gap-x-10">
          <SelectProfile
            selectedCandidate={candidate1}
            onSelectCandidate={setCandidate1}
            excludedCandidateIds={candidate2 ? [candidate2] : []}
          />
          <SelectProfile
            selectedCandidate={candidate2}
            onSelectCandidate={setCandidate2}
            excludedCandidateIds={candidate1 ? [candidate1] : []}
          />
        </div>

        {/* Resultados de la Comparación */}
        <GovernmentPlan />
      </section>


    </div>
  );
}
