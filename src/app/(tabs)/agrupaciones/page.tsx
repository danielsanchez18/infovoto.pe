"use client";

import { useState } from "react";
import Link from "next/link";
import { SelectProfile } from "./components/select-profile/SelectProfile";
import { GovernmentPlan } from "./components/government-plan/GovernmentPlan";
import { Ranking } from "./components/ranking/Ranking";
import { Button } from "@/components/ui/button";

export default function AgrupacionesPage() {
  const [candidate1, setCandidate1] = useState<string>("1");
  const [candidate2, setCandidate2] = useState<string>("2");

  return (
    <div className='flex flex-col gap-5 py-10'>
      <Ranking />
      <div className="flex w-full items-center justify-between mt-10">
        <h3 className="text-xl font-semibold">
          Compara Perfiles y Propuestas
        </h3>
        {/* <Link href="/presidentes">
          <Button>Ver todos</Button>
        </Link> */}
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
  )
}
