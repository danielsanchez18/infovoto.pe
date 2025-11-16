import React from 'react'
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GovernmentPlanSection {
  id: number;
  sector: string;
  title: string;
  content: string;
  problemIdentified: string;
  strategicObjective: string;
  indicators: string;
  goals: string;
  order: number;
}

interface GovernmentPlan {
  id: number;
  title: string;
  description: string;
  documentUrl: string;
  fromYear: number;
  toYear: number;
  sections: GovernmentPlanSection[];
}

interface ProposalsProps {
  governmentPlans: GovernmentPlan[];
}

const sectorTranslations: Record<string, string> = {
  HEALTH: "Salud",
  EDUCATION: "Educación",
  ECONOMY: "Economía",
  SECURITY: "Seguridad",
  INFRASTRUCTURE: "Infraestructura",
  AGRICULTURE: "Agricultura",
  ENVIRONMENT: "Medio Ambiente",
  LABOR: "Trabajo",
  JUSTICE: "Justicia",
  CULTURE: "Cultura",
  TECHNOLOGY: "Tecnología",
  TRANSPORT: "Transporte",
  SOCIAL_WELFARE: "Bienestar Social",
  OTHER: "Otros"
};

export const Proposals = ({ governmentPlans }: ProposalsProps) => {
  if (!governmentPlans || governmentPlans.length === 0) {
    return (
      <section className='grid gap-y-5'>
        <p className='text-center text-gray-600 py-10'>
          No hay planes de gobierno disponibles para este candidato.
        </p>
      </section>
    );
  }

  const plan = governmentPlans[0]; // Usar el primer plan disponible
  const sections = plan.sections?.sort((a, b) => a.order - b.order) || [];

  return (
    <section className='grid gap-y-10'>
      {/* Header del plan */}
      <div className='border border-gray-200 rounded-lg p-5'>
        <h3 className='text-lg font-semibold mb-2'>{plan.title}</h3>
        {plan.description && (
          <p className='text-sm text-gray-600 mb-3'>{plan.description}</p>
        )}
        <p className='text-sm text-gray-500'>
          Período: {plan.fromYear} - {plan.toYear}
        </p>
        {plan.documentUrl && (
          <Link href={`/plan-de-gobierno/${plan.id}`} className='mt-3 inline-block'>
            <Button size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Ver plan completo
            </Button>
          </Link>
        )}
      </div>

      {/* Secciones por sector */}
      {sections.length === 0 ? (
        <p className='text-center text-gray-600 py-5'>
          No hay propuestas detalladas disponibles.
        </p>
      ) : (
        sections.map((section) => (
          <div key={section.id} className="grid gap-y-5">
            {/* Categoria/Sector */}
            <h4 className="text-sm uppercase font-semibold text-primary">
              {sectorTranslations[section.sector] || section.sector}
            </h4>

            {/* Contenido */}
            <div className="grid border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
              {/* Título de la propuesta */}
              <h5 className="px-4 py-3 bg-gray-100 font-semibold text-sm uppercase">
                {section.title}
              </h5>

              {/* Contenido principal */}
              {section.content && (
                <div className="grid py-4">
                  <p className="text-sm px-4 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              )}

              {/* Problema identificado */}
              {section.problemIdentified && (
                <div className="grid py-4 bg-red-50">
                  <p className="text-sm px-4">
                    <span className="font-semibold text-red-900">PROBLEMA IDENTIFICADO:</span>{' '}
                    <span className="whitespace-pre-line">{section.problemIdentified}</span>
                  </p>
                </div>
              )}

              {/* Objetivo estratégico */}
              {section.strategicObjective && (
                <div className="grid py-4">
                  <p className="text-sm px-4">
                    <span className="font-semibold">OBJETIVO:</span>{' '}
                    <span className="whitespace-pre-line">{section.strategicObjective}</span>
                  </p>
                </div>
              )}

              {/* Indicadores */}
              {section.indicators && (
                <div className="grid py-4">
                  <div className="text-sm px-4">
                    <p className="font-semibold mb-2">INDICADORES</p>
                    <div className="whitespace-pre-line">{section.indicators}</div>
                  </div>
                </div>
              )}

              {/* Metas */}
              {section.goals && (
                <div className="grid py-4 bg-green-50">
                  <p className="text-sm px-4">
                    <span className="font-semibold text-green-900">
                      META ({plan.fromYear}-{plan.toYear}):
                    </span>{' '}
                    <span className="whitespace-pre-line">{section.goals}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </section>
  );
};
