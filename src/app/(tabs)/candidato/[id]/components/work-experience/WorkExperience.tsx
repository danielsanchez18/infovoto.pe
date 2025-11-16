import { BriefcaseBusinessIcon, CircleDollarSign, GraduationCap } from 'lucide-react'
import React from 'react'

interface WorkExperienceItem {
  id: number;
  position: string;
  company: string;
  startYear: number;
  endYear: number | null;
  isCurrent: boolean;
  description: string;
  order: number;
}

interface EducationItem {
  id: number;
  level: string;
  degree: string;
  institution: string;
  graduationYear: number;
  fieldOfStudy: string;
  order: number;
}

interface AssetDeclaration {
  id: number;
  year: number;
  declaredIncome: string;
  currency: string;
  source: string;
  description: string;
  salaryIncome: string | null;
  rentalIncome: string | null;
  dividendIncome: string | null;
  otherIncome: string | null;
}

interface WorkExperienceProps {
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  assetDeclarations: AssetDeclaration[];
}

const educationLevelTranslations: Record<string, string> = {
  BACHELOR: "Licenciatura",
  MASTER: "Maestría",
  DOCTORATE: "Doctorado",
  TECHNICAL: "Técnico",
  OTHER: "Otro"
};

export const WorkExperience = ({ workExperience, education, assetDeclarations }: WorkExperienceProps) => {
  return (
    <section className='grid gap-y-10'>

      {/* Experiencia Laboral */}
      {workExperience.length > 0 && (
        <div className='grid gap-y-5'>
          {/* Titulo */}
          <div className='flex items-center gap-x-4'>
            <div className='p-2 rounded-lg bg-primary/10 text-primary'>
              <BriefcaseBusinessIcon className='size-5' />
            </div>
            <h2 className='text-lg font-semibold'>Experiencia Laboral</h2>
          </div>

          {/* Contenido */}
          <div className='grid gap-y-3'>
            {workExperience
              .sort((a, b) => b.order - a.order)
              .map((exp) => (
                <div key={exp.id} className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
                  <p className='text-sm mb-2 uppercase font-semibold'>{exp.position}</p>
                  <p className='text-sm text-gray-600'>{exp.company}</p>
                  <p className='text-xs text-gray-600'>
                    {exp.startYear} - {exp.isCurrent ? 'Presente' : exp.endYear}
                  </p>
                  {exp.description && (
                    <p className='text-sm mt-2'>{exp.description}</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Formación Académica */}
      {education.length > 0 && (
        <div className='grid gap-y-5'>
          {/* Titulo */}
          <div className='flex items-center gap-x-4'>
            <div className='p-2 rounded-lg bg-primary/10 text-primary'>
              <GraduationCap className='size-5' />
            </div>
            <h2 className='text-lg font-semibold'>Formación Académica</h2>
          </div>

          {/* Contenido */}
          <div className='grid gap-y-3'>
            {education
              .sort((a, b) => b.order - a.order)
              .map((edu) => (
                <div key={edu.id} className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
                  <p className='text-sm uppercase font-semibold'>
                    {educationLevelTranslations[edu.level] || edu.level} - {edu.degree}
                  </p>
                  <p className='text-sm text-gray-600'>{edu.institution}</p>
                  <p className='text-xs text-gray-600'>{edu.graduationYear}</p>
                  {edu.fieldOfStudy && (
                    <p className='text-xs text-gray-500 mt-1'>{edu.fieldOfStudy}</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Bienes y Rentas Declarados */}
      {assetDeclarations.length > 0 && (
        <div className='grid gap-y-5'>
          {/* Titulo */}
          <div className='flex items-center gap-x-4'>
            <div className='p-2 rounded-lg bg-primary/10 text-primary'>
              <CircleDollarSign className='size-5' />
            </div>
            <h2 className='text-lg font-semibold'>Bienes y Rentas Declarados</h2>
          </div>

          {/* Contenido */}
          <div className='grid gap-y-3'>
            {assetDeclarations
              .sort((a, b) => b.year - a.year)
              .map((declaration) => {
                const income = parseFloat(declaration.declaredIncome);
                const formattedIncome = income.toLocaleString('es-PE', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                });
                const currencySymbol = declaration.currency === 'PEN' ? 'S/.' : declaration.currency;

                return (
                  <div key={declaration.id} className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
                    <p className='text-sm mb-2 uppercase font-semibold'>Ingresos Anuales Declarados</p>
                    <p className='text-sm text-gray-600'>Fuente: {declaration.source}</p>
                    <p className='text-xs text-gray-600'>{declaration.year}</p>
                    <p className='text-sm mt-2 font-semibold'>
                      {currencySymbol} {formattedIncome}
                    </p>
                    {declaration.description && (
                      <p className='text-xs text-gray-600 mt-1'>{declaration.description}</p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}

    </section>
  )
}
