import { BriefcaseBusinessIcon, CircleDollarSign, GraduationCap } from 'lucide-react'
import React from 'react'

export const WorkExperience = () => {
  return (
    <section className='grid gap-y-10'>

      {/* Experiencia Laboral */}
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
          <div className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
            <p className='text-sm mb-2 uppercase font-semibold'>Gerente General</p>
            <p className='text-sm text-gray-600'>Ministerio de Economía y Finanzas</p>
            <p className='text-xs text-gray-600'>2020 - Presente</p>
            <p className='text-sm mt-2'>Responsable de la gestión presupuestaria y política fiscal nacional.</p>
          </div>
          <div className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
            <p className='text-sm mb-2 uppercase font-semibold'>Director Regional</p>
            <p className='text-sm text-gray-600'>Director Regional</p>
            <p className='text-xs text-gray-600'>2016 - 2020</p>
            <p className='text-sm mt-2'>Supervisión de proyectos de desarrollo regional y relaciones interinstitucionales.</p>
          </div>
        </div>

      </div>

      {/* Formación Académica */}
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
          <div className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
            <p className='text-sm uppercase font-semibold'>Doctorado en Administración Pública</p>
            <p className='text-sm text-gray-600'>Universidad Nacional Mayor de San Marcos</p>
            <p className='text-xs text-gray-600'>2015</p>
          </div>
          <div className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
            <p className='text-sm uppercase font-semibold'>Maestría en Gestión Pública</p>
            <p className='text-sm text-gray-600'>Pontificia Universidad Católica del Perú</p>
            <p className='text-xs text-gray-600'>2012</p>
          </div>
          <div className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
            <p className='text-sm uppercase font-semibold'>Licenciatura en Economía</p>
            <p className='text-sm text-gray-600'>Universidad Nacional de Ingeniería</p>
            <p className='text-xs text-gray-600'>2010</p>
          </div>
        </div>
      </div>

      {/* Bienes y Rentas Declarados */}
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
          <div className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
            <p className='text-sm mb-2 uppercase font-semibold'>Ingresos Anuales Declarados</p>
            <p className='text-sm text-gray-600'>Fuente: JNE</p>
            <p className='text-xs text-gray-600'>2024</p>
            <p className='text-sm mt-2'>S/. 45,000 (incluye remuneraciones, rentas y dividendos)</p>
          </div>

          <div className='grid py-1 px-5 ml-5 border-l-2 border-primary'>
            <p className='text-sm mb-2 uppercase font-semibold'>Bienes Inmuebles</p>
            <p className='text-sm text-gray-600'>Registrados en SUNARP</p>
            <p className='text-xs text-gray-600'>Actualizado</p>
            <p className='text-sm mt-2'>3 propiedades (Lima, Cusco, Arequipa)</p>
          </div>
        </div>
      </div>

    </section>
  )
}
