import Link from 'next/link'
import React from 'react'

export const NewCardComercio = () => {
  return (
    <div className='grid gap-y-3'>
      <Link href="/buscar/ELECCIONES-2026" 
        className='uppercase font-bold text-sm text-primary hover:underline w-fit line-clamp-1'>
        ELECCIONES 2026
      </Link>
      
      <Link href="https://elcomercio.pe/politica/peru-primero-recicla-a-dos-candidatos-denunciados-por-agresion-martin-vizcarra-carlos-juscamayta-emilio-nicolich-tlcnota-noticia/"
        target="_blank" 
        className='grid grid-cols-2 gap-x-2 group'>
        <h6 className='font-semibold text-balance line-clamp-6 leading-tight group-hover:underline group-hover:text-primary'>Elecciones 2026: Perú Primero recicla a dos candidatos denunciados por agresión</h6>
        <div className='w-full h-28 bg-gray-200 contain-content'>
          <img src="https://elcomercio.pe/resizer/v2/SNLN6LUTWJGRZJFFX2IV7Q36TY.png?auth=a2598c364a0e241af789f28077b9dea74080102de0e954974c77f32fd99f2e75&width=320&height=180&quality=75&smart=true" alt="" 
            className='object-cover w-full h-full'/>
        </div>
      </Link>
      
    </div>
  )
}
