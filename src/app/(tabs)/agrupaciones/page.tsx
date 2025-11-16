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
      <div className="flex flex-col w-full items-center justify-between mt-10">
        <h3 className="text-xl font-semibold">
          Compara Perfiles y Propuestas
        </h3>
        <Link href="/comparador" className="mt-4">
          <Button>Ir al comparador</Button>
        </Link>
      </div>
    </div>
  )
}
