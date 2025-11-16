'use client';

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/config/api";

interface VoteIntention {
  id: number;
  userId: number;
  candidateId: number;
  electionId: number;
  createdAt: string;
}

interface Candidate {
  id: number;
  fullName: string;
  office: string;
  photoUrl: string;
  politicalGroupId: number;
  voteIntentions: VoteIntention[];
}

interface PoliticalGroup {
  id: number;
  name: string;
  shortName: string;
  logoUrl: string;
  description: string;
  candidates: Candidate[];
}

export const Groups = () => {
  const [politicalGroups, setPoliticalGroups] = useState<PoliticalGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPoliticalGroups();
  }, []);

  const fetchPoliticalGroups = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/political-groups`);
      const result = await response.json();

      if (result.success && result.data) {
        setPoliticalGroups(result.data);
      }
    } catch (error) {
      console.error('Error al cargar agrupaciones políticas:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTotalVoteIntentions = (group: PoliticalGroup): number => {
    let total = 0;
    group.candidates.forEach((candidate) => {
      total += candidate.voteIntentions?.length || 0;
    });
    return total;
  };

  const getPresidentialCandidate = (group: PoliticalGroup): Candidate | null => {
    return group.candidates.find((c) => c.office === 'PRESIDENT') || null;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <section className="grid gap-10">
        {/* Título */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Agrupaciones Políticas</h2>
            <p className="text-sm text-gray-600 line-clamp-1">
              Compara propuestas y conoce candidatos de tu región.
            </p>
          </div>
          <Link href="/agrupaciones">
            <Button className="flex items-center gap-x-1 mt-2">
              <p className="hidden md:block">Ver más</p>
              <ChevronRight />
            </Button>
          </Link>
        </div>

        {/* Grid de Agrupaciones */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center gap-10 h-auto">
          {politicalGroups.map((group) => {
            const presidentialCandidate = getPresidentialCandidate(group);
            const totalVotes = getTotalVoteIntentions(group);

            return (
              <Link 
                key={group.id} 
                href={`/agrupaciones/${group.id}`} 
                className="gap-y-5 flex flex-col items-center group"
              >
                <div className="w-28 h-28 flex items-center justify-center contain-content relative">
                  {/* Logo del partido */}
                  <img
                    src={group.logoUrl}
                    alt={`Logo de ${group.name}`}
                    className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
                  />
                  {/* Foto del candidato presidencial */}
                  {presidentialCandidate && (
                    <img
                      src={presidentialCandidate.photoUrl}
                      alt={`Foto de ${presidentialCandidate.fullName}`}
                      className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
                    />
                  )}
                </div>
                <div className="text-center">
                  <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">
                    {group.shortName || group.name}
                  </h5>
                  <p className="text-sm text-gray-600">
                    {totalVotes} {totalVotes === 1 ? 'votación' : 'votaciones'}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
