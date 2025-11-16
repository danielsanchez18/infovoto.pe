'use client';

import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/config/api';
import { SelectProfile } from './components/select-profile/SelectProfile';
import { GovernmentPlanComparison } from './components/government-plan/GovernmentPlanComparison';

interface GovernmentPlanSection {
  id: number;
  governmentPlanId: number;
  sector: string;
  problemIdentified: string;
  strategicObjective: string;
  indicators: string;
  goals: string;
  title: string;
  content: string;
  order: number;
}

interface GovernmentPlan {
  id: number;
  politicalGroupId: number;
  title: string;
  description: string;
  documentUrl: string;
  fromYear: number;
  toYear: number;
  sections: GovernmentPlanSection[];
}

interface PoliticalGroup {
  id: number;
  name: string;
  shortName: string;
  logoUrl: string;
  description: string;
  governmentPlans: GovernmentPlan[];
}

export interface CandidateData {
  id: number;
  fullName: string;
  office: string;
  biography: string;
  photoUrl: string;
  birthDate: string | null;
  birthPlace: string | null;
  nationality: string;
  civilStatus: string | null;
  documentType: string | null;
  documentNumber: string | null;
  websiteUrl: string | null;
  facebookUrl: string | null;
  twitterUrl: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
  youtubeUrl: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  politicalGroupId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  politicalGroup: PoliticalGroup;
}

interface CandidateOption {
  id: number;
  name: string;
  politicalGroup: string;
}

export default function ComparadorPage() {
  const [candidates, setCandidates] = useState<CandidateOption[]>([]);
  const [selectedCandidate1, setSelectedCandidate1] = useState<number | null>(null);
  const [selectedCandidate2, setSelectedCandidate2] = useState<number | null>(null);
  const [candidate1Data, setCandidate1Data] = useState<CandidateData | null>(null);
  const [candidate2Data, setCandidate2Data] = useState<CandidateData | null>(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  // Fetch all presidential candidates on mount
  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/political-groups`);
      const result = await response.json();

      if (result.success && result.data) {
        const presidentialCandidates: CandidateOption[] = [];
        
        result.data.forEach((group: any) => {
          if (group.candidates && group.candidates.length > 0) {
            group.candidates.forEach((candidate: any) => {
              if (candidate.office === 'PRESIDENT') {
                presidentialCandidates.push({
                  id: candidate.id,
                  name: candidate.fullName,
                  politicalGroup: group.shortName || group.name,
                });
              }
            });
          }
        });

        setCandidates(presidentialCandidates);
      }
    } catch (error) {
      console.error('Error al cargar candidatos:', error);
    }
  };

  const fetchCandidateData = async (candidateId: number, position: 1 | 2) => {
    const setLoading = position === 1 ? setLoading1 : setLoading2;
    const setData = position === 1 ? setCandidate1Data : setCandidate2Data;

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/candidates/${candidateId}`);
      const result = await response.json();

      if (result.success && result.data) {
        setData(result.data);
      }
    } catch (error) {
      console.error(`Error al cargar datos del candidato ${candidateId}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleCandidate1Change = (candidateId: number) => {
    setSelectedCandidate1(candidateId);
    fetchCandidateData(candidateId, 1);
  };

  const handleCandidate2Change = (candidateId: number) => {
    setSelectedCandidate2(candidateId);
    fetchCandidateData(candidateId, 2);
  };

  // Get all unique sectors from both candidates
  const getAllSectors = (): string[] => {
    const sectors = new Set<string>();

    if (candidate1Data?.politicalGroup.governmentPlans) {
      candidate1Data.politicalGroup.governmentPlans.forEach((plan) => {
        plan.sections.forEach((section) => {
          sectors.add(section.sector);
        });
      });
    }

    if (candidate2Data?.politicalGroup.governmentPlans) {
      candidate2Data.politicalGroup.governmentPlans.forEach((plan) => {
        plan.sections.forEach((section) => {
          sectors.add(section.sector);
        });
      });
    }

    return Array.from(sectors).sort();
  };

  const sectors = getAllSectors();

  return (
    <div className="py-10 grid gap-10 px-4 md:px-8 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Compara Perfiles y Propuestas</h1>
        <button
          onClick={() => {
            setSelectedCandidate1(null);
            setSelectedCandidate2(null);
            setCandidate1Data(null);
            setCandidate2Data(null);
          }}
          className="px-6 py-2 rounded-md text-white font-medium"
          style={{ backgroundColor: '#a92c2c' }}
        >
          Ver todos
        </button>
      </div>

      {/* Candidate Selection */}
      <div className="grid md:grid-cols-2 gap-6">
        <SelectProfile
          candidates={candidates}
          selectedCandidateId={selectedCandidate1}
          onSelectCandidate={handleCandidate1Change}
          candidateData={candidate1Data}
          loading={loading1}
        />
        <SelectProfile
          candidates={candidates}
          selectedCandidateId={selectedCandidate2}
          onSelectCandidate={handleCandidate2Change}
          candidateData={candidate2Data}
          loading={loading2}
        />
      </div>

      {/* Government Plan Comparison */}
      {candidate1Data && candidate2Data && sectors.length > 0 && (
        <div className="grid gap-8">
          {sectors.map((sector) => (
            <GovernmentPlanComparison
              key={sector}
              sector={sector}
              candidate1Data={candidate1Data}
              candidate2Data={candidate2Data}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {(!candidate1Data || !candidate2Data) && (
        <div className="text-center py-20 text-gray-600">
          <p className="text-lg">
            Selecciona dos candidatos para comparar sus planes de gobierno
          </p>
        </div>
      )}
    </div>
  );
}
