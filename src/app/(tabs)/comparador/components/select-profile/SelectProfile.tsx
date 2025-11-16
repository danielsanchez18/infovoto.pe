'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { CandidateData } from '../../page';

interface CandidateOption {
  id: number;
  name: string;
  politicalGroup: string;
}

interface SelectProfileProps {
  candidates: CandidateOption[];
  selectedCandidateId: number | null;
  onSelectCandidate: (candidateId: number) => void;
  candidateData: CandidateData | null;
  loading: boolean;
}

const translateOffice = (office: string): string => {
  const translations: Record<string, string> = {
    PRESIDENT: 'CANDIDATO PRESIDENCIAL',
    VICE_PRESIDENT_FIRST: 'PRIMER VICEPRESIDENTE',
    VICE_PRESIDENT_SECOND: 'SEGUNDO VICEPRESIDENTE',
    CONGRESS_MEMBER: 'CANDIDATO AL CONGRESO',
  };
  return translations[office] || office;
};

export const SelectProfile = ({
  candidates,
  selectedCandidateId,
  onSelectCandidate,
  candidateData,
  loading,
}: SelectProfileProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 grid gap-6">
      {/* Select Dropdown */}
      <Select
        value={selectedCandidateId?.toString() || ''}
        onValueChange={(value) => onSelectCandidate(Number(value))}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona un candidato" />
        </SelectTrigger>
        <SelectContent>
          {candidates.map((candidate) => (
            <SelectItem key={candidate.id} value={candidate.id.toString()}>
              {candidate.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Candidate Profile */}
      {!loading && candidateData && (
        <div className="grid gap-4 text-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-lg">
              <img
                src={candidateData.photoUrl}
                alt={`Foto de ${candidateData.fullName}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="text-xl font-bold uppercase">{candidateData.fullName}</h2>

          {/* Political Group */}
          <p className="font-semibold" style={{ color: '#a92c2c' }}>
            {candidateData.politicalGroup.shortName || candidateData.politicalGroup.name}
          </p>

          {/* Office */}
          <p className="text-sm text-gray-600 uppercase">
            {translateOffice(candidateData.office)}
          </p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !candidateData && selectedCandidateId && (
        <div className="text-center py-10 text-gray-600">
          <p>No se pudo cargar la información del candidato</p>
        </div>
      )}
    </div>
  );
};
