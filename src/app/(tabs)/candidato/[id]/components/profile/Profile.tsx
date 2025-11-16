import { AlertTriangleIcon } from "lucide-react";
import React from "react";
import { CandidateData } from "../../page";

const officeTranslations: Record<string, string> = {
  PRESIDENT: "Presidente",
  FIRST_VP: "Primer Vicepresidente",
  SECOND_VP: "Segundo Vicepresidente",
  CONGRESS: "Congresista",
  SENATE_NATIONAL: "Senador Nacional",
  SENATE_REGIONAL: "Senador Regional",
  ANDINE_PARLIAMENT: "Parlamento Andino"
};

interface ProfileProps {
  candidate: CandidateData;
}

export const Profile = ({ candidate }: ProfileProps) => {
  const officeInSpanish = officeTranslations[candidate.office] || candidate.office;
  const investigationsCount = candidate.investigations.length;
  const activeInvestigations = candidate.investigations.filter(inv => inv.status === 'IN_PROGRESS');

  return (
    <div className="grid gap-y-3 w-full">
      <div className="h-72">
        <img
          src={candidate.photoUrl}
          alt={candidate.fullName}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{candidate.fullName}</h1>
        <p className="text-gray-600">
          Candidato a {officeInSpanish}
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="h-8">
          <img
            src={candidate.politicalGroup.logoUrl}
            alt={candidate.politicalGroup.name}
            className="h-full object-cover"
          />
        </div>
        <p className="text-sm font-semibold"> - {candidate.politicalGroup.shortName.toUpperCase()}</p>
      </div>

      {/* Investigaciones */}
      {investigationsCount > 0 && (
        <div className="mt-5 pt-5 border-t border-gray-300">
          <div className="flex gap-x-3">
            <div className="size-14 bg-amber-500 rounded-full flex items-center justify-center">
              <AlertTriangleIcon className="size-7 text-white" />
            </div>

            <div>
              <h4 className="text-lg font-semibold">
                {investigationsCount} investigaci{investigationsCount > 1 ? 'ones' : 'ón'} en curso
              </h4>
              {activeInvestigations.length > 0 && (
                <p className="text-sm">{activeInvestigations[0].type}</p>
              )}
            </div>
          </div>

          <div>
            {activeInvestigations.length > 0 && activeInvestigations[0].institution && (
              <p className="text-sm text-gray-600 mt-4">Fuente: {activeInvestigations[0].institution}.</p>
            )}
            <p className="text-sm text-gray-600"> Actualizado al {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      )}
    </div>
  );
};
