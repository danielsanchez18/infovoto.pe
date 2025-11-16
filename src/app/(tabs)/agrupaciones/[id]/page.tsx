"use client"

import { Button } from "@/components/ui/button";
import CandidateGrid from "./components/candidate-grid/CandidateGrid";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/config/api";

interface Candidate {
  id: number;
  fullName: string;
  office: string;
  biography: string;
  photoUrl: string;
  politicalGroupId: number;
  userId: number;
}

interface PoliticalGroup {
  id: number;
  name: string;
  shortName: string;
  logoUrl: string;
  description: string;
  candidates: Candidate[];
  governmentPlans: Array<{
    id: number;
    title: string;
  }>;
}

export default function AgrupacionesIdPage() {
  const pathname = usePathname();
  const params = useParams();
  const id = params.id as string;
  
  const [politicalGroup, setPoliticalGroup] = useState<PoliticalGroup | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPoliticalGroup();
    }
  }, [id]);

  const fetchPoliticalGroup = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${API_BASE_URL}/political-groups/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const result = await response.json();
      
      if (result.success && result.data) {
        setPoliticalGroup(result.data);
      }
    } catch (error) {
      console.error('Error fetching political group:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Cargando agrupación política...</div>;
  }

  if (!politicalGroup) {
    return <div className="text-center py-10">No se encontró la agrupación política</div>;
  }

  return (
    <div className="flex flex-col w-full pb-10">
      <div className="flex flex-row justify-between items-center mt-5">
        {/* Título Section */}
        <section className="flex items-center gap-x-5">

          {/* Logo del partido */}
          <div className="h-12">
            <img src={politicalGroup.logoUrl} alt={politicalGroup.name}
              className="h-full object-cover" />
          </div>

          {/* titulo y subtítulo */}
          <div>
            <p className="uppercase font-semibold text-lg leading-tight">{politicalGroup.shortName}</p>
            <p className="text-sm leading-tight">Plancha electoral</p>
          </div>
        </section>
        <div className="flex gap-2 items-center">
          <Link href={`${pathname}/publicaciones`}>
            <Button >Publicaciones</Button>
          </Link>
          {politicalGroup.governmentPlans && politicalGroup.governmentPlans.length > 0 && (
            <Link href={`/plan-de-gobierno/${politicalGroup.governmentPlans[0].id}`}>
              <Button>Plan de gobierno</Button>
            </Link>
          )}
        </div>
      </div>
      <CandidateGrid candidates={politicalGroup.candidates} />
    </div>
  );
}