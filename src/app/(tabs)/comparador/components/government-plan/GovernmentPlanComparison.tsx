'use client';

import React from 'react';
import type { CandidateData } from '../../page';

interface GovernmentPlanComparisonProps {
  sector: string;
  candidate1Data: CandidateData;
  candidate2Data: CandidateData;
}

const translateSector = (sector: string): string => {
  const translations: Record<string, string> = {
    HEALTH: 'SALUD',
    EDUCATION: 'EDUCACION',
    ECONOMY: 'ECONOMÍA',
    SECURITY: 'SEGURIDAD',
    INFRASTRUCTURE: 'INFRAESTRUCTURA',
    ENVIRONMENT: 'AMBIENTE',
    JUSTICE: 'JUSTICIA',
    LABOR: 'TRABAJO',
    AGRICULTURE: 'AGRICULTURA',
    TECHNOLOGY: 'TECNOLOGÍA',
    CULTURE: 'CULTURA',
    SOCIAL_DEVELOPMENT: 'DESARROLLO SOCIAL',
    HOUSING: 'VIVIENDA',
    TRANSPORT: 'TRANSPORTE',
    ENERGY: 'ENERGÍA',
    MINING: 'MINERÍA',
    TOURISM: 'TURISMO',
    FOREIGN_AFFAIRS: 'RELACIONES EXTERIORES',
  };
  return translations[sector] || sector;
};

export const GovernmentPlanComparison = ({
  sector,
  candidate1Data,
  candidate2Data,
}: GovernmentPlanComparisonProps) => {
  // Get sections for this sector from both candidates
  const getSection = (candidateData: CandidateData) => {
    if (!candidateData.politicalGroup.governmentPlans || candidateData.politicalGroup.governmentPlans.length === 0) {
      return null;
    }

    for (const plan of candidateData.politicalGroup.governmentPlans) {
      const section = plan.sections.find((s) => s.sector === sector);
      if (section) return section;
    }

    return null;
  };

  const section1 = getSection(candidate1Data);
  const section2 = getSection(candidate2Data);

  // Don't render if neither candidate has a section for this sector
  if (!section1 && !section2) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Sector Header */}
      <div className="px-6 py-4" style={{ backgroundColor: '#f5f5f5' }}>
        <h2 className="text-lg font-bold uppercase">
          NOMBRE DEL SECTOR ({translateSector(sector)})
        </h2>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 divide-x divide-gray-200">
        {/* Candidate 1 */}
        <div className="p-6 grid gap-6">
          {section1 ? (
            <>
              {/* Title */}
              {section1.title && (
                <div>
                  <h3 className="text-sm font-semibold uppercase mb-2" style={{ color: '#a92c2c' }}>
                    {section1.title}
                  </h3>
                </div>
              )}

              {/* Problem */}
              {section1.problemIdentified && (
                <div>
                  <h4 className="font-semibold mb-2">OBJETIVO:</h4>
                  <p className="text-sm text-gray-700">{section1.problemIdentified}</p>
                </div>
              )}

              {/* Strategic Objective */}
              {section1.strategicObjective && (
                <div>
                  <h4 className="font-semibold mb-2">OBJETIVO:</h4>
                  <p className="text-sm text-gray-700">{section1.strategicObjective}</p>
                </div>
              )}

              {/* Indicators */}
              {section1.indicators && (
                <div>
                  <h4 className="font-semibold mb-2">INDICADOR</h4>
                  <p className="text-sm text-gray-700">{section1.indicators}</p>
                </div>
              )}

              {/* Goals */}
              {section1.goals && (
                <div>
                  <p className="text-sm text-gray-700">{section1.goals}</p>
                </div>
              )}

              {/* Content */}
              {section1.content && (
                <div>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{section1.content}</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10 text-gray-500">
              <p className="text-sm">No hay propuesta para este sector</p>
            </div>
          )}
        </div>

        {/* Candidate 2 */}
        <div className="p-6 grid gap-6">
          {section2 ? (
            <>
              {/* Title */}
              {section2.title && (
                <div>
                  <h3 className="text-sm font-semibold uppercase mb-2" style={{ color: '#a92c2c' }}>
                    {section2.title}
                  </h3>
                </div>
              )}

              {/* Problem */}
              {section2.problemIdentified && (
                <div>
                  <h4 className="font-semibold mb-2">OBJETIVO:</h4>
                  <p className="text-sm text-gray-700">{section2.problemIdentified}</p>
                </div>
              )}

              {/* Strategic Objective */}
              {section2.strategicObjective && (
                <div>
                  <h4 className="font-semibold mb-2">OBJETIVO:</h4>
                  <p className="text-sm text-gray-700">{section2.strategicObjective}</p>
                </div>
              )}

              {/* Indicators */}
              {section2.indicators && (
                <div>
                  <h4 className="font-semibold mb-2">INDICADOR</h4>
                  <p className="text-sm text-gray-700">{section2.indicators}</p>
                </div>
              )}

              {/* Goals */}
              {section2.goals && (
                <div>
                  <p className="text-sm text-gray-700">{section2.goals}</p>
                </div>
              )}

              {/* Content */}
              {section2.content && (
                <div>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{section2.content}</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10 text-gray-500">
              <p className="text-sm">No hay propuesta para este sector</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
