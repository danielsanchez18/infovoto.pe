"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/config/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, FileText, Target, TrendingUp, Activity } from "lucide-react";

interface PoliticalGroup {
  id: number;
  name: string;
  shortName: string;
  logoUrl: string;
}

interface GovernmentPlanSection {
  id: number;
  sector: string;
  title: string;
  order: number;
  content: string;
  problemIdentified: string;
  strategicObjective: string;
  indicators: string;
  goals: string;
}

interface GovernmentPlan {
  id: number;
  politicalGroupId: number;
  title: string;
  description: string;
  documentUrl: string;
  fromYear: number;
  toYear: number;
  politicalGroup: PoliticalGroup;
  sections: GovernmentPlanSection[];
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
  TRANSPORT: "Transporte"
};

export default function PlanDeGobiernoPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [governmentPlan, setGovernmentPlan] = useState<GovernmentPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchGovernmentPlan();
    }
  }, [id]);

  const fetchGovernmentPlan = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${API_BASE_URL}/government-plans/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const result = await response.json();
      
      if (result.success && result.data) {
        setGovernmentPlan(result.data);
      }
    } catch (error) {
      console.error('Error fetching government plan:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Cargando plan de gobierno...</div>;
  }

  if (!governmentPlan) {
    return <div className="text-center py-10">No se encontró el plan de gobierno</div>;
  }

  return (
    <div className="py-10 grid gap-10">
      {/* Header */}
      <section className="grid gap-5">
        <Link href={`/agrupaciones/${governmentPlan.politicalGroupId}`}>
          <Button variant="outline" className="w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a la agrupación
          </Button>
        </Link>
        
        <div className="flex items-center gap-5">
          <div className="h-16">
            <img 
              src={governmentPlan.politicalGroup.logoUrl} 
              alt={governmentPlan.politicalGroup.name}
              className="h-full object-cover" 
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">{governmentPlan.title}</h1>
            <p className="text-sm text-gray-600">{governmentPlan.politicalGroup.name}</p>
            <p className="text-sm text-gray-500">Período: {governmentPlan.fromYear} - {governmentPlan.toYear}</p>
          </div>
        </div>

        {governmentPlan.description && (
          <div className="border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-700">{governmentPlan.description}</p>
          </div>
        )}

        {governmentPlan.documentUrl && (
          <div className="flex gap-3">
            <a href={governmentPlan.documentUrl} target="_blank" rel="noopener noreferrer">
              <Button>
                <FileText className="w-4 h-4 mr-2" />
                Ver documento completo
              </Button>
            </a>
          </div>
        )}
      </section>

      {/* Sections */}
      {governmentPlan.sections && governmentPlan.sections.length > 0 && (
        <section className="grid gap-5">
          <h2 className="text-xl font-semibold">Propuestas por Sector</h2>
          
          <div className="grid gap-6">
            {governmentPlan.sections
              .sort((a, b) => a.order - b.order)
              .map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg p-6 grid gap-4">
                  {/* Header de la sección */}
                  <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">
                        {sectorTranslations[section.sector] || section.sector}
                      </p>
                      <h3 className="font-semibold text-lg">{section.title}</h3>
                    </div>
                  </div>

                  {/* Contenido principal */}
                  {section.content && (
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        Propuesta
                      </h4>
                      <p className="text-sm text-gray-700 whitespace-pre-line">{section.content}</p>
                    </div>
                  )}

                  {/* Problema identificado */}
                  {section.problemIdentified && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-red-900 flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Problema Identificado
                      </h4>
                      <p className="text-sm text-gray-700 whitespace-pre-line">{section.problemIdentified}</p>
                    </div>
                  )}

                  {/* Objetivo estratégico */}
                  {section.strategicObjective && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-blue-900 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Objetivo Estratégico
                      </h4>
                      <p className="text-sm text-gray-700 whitespace-pre-line">{section.strategicObjective}</p>
                    </div>
                  )}

                  {/* Indicadores */}
                  {section.indicators && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-green-900 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Indicadores
                      </h4>
                      <p className="text-sm text-gray-700 whitespace-pre-line">{section.indicators}</p>
                    </div>
                  )}

                  {/* Metas */}
                  {section.goals && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-purple-900 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Metas
                      </h4>
                      <p className="text-sm text-gray-700 whitespace-pre-line">{section.goals}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {governmentPlan.documentUrl && (
        <section className="bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">¿Quieres conocer más detalles?</h3>
          <p className="text-sm mb-6 opacity-90 max-w-2xl mx-auto">
            Descarga el documento completo del plan de gobierno para revisar todas las propuestas.
          </p>
          <a href={governmentPlan.documentUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              <FileText className="w-4 h-4 mr-2" />
              Descargar Documento Completo
            </Button>
          </a>
        </section>
      )}
    </div>
  );
}
