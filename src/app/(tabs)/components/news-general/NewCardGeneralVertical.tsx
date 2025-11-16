import Link from 'next/link'
import React from 'react'

export const NewCardGeneralVertical = () => {
  return (
    <Link href="/noticias/86dc874a-1286-4d98-92f3-0f4b5978c185">
      <div className='relative w-full bg-gray-200 h-full group'>
        <div className='w-full h-full absolute top-0 left-0'>
          <img src="https://elcomercio.pe/resizer/v2/GEPXCTD55VBN5G336DF6V3OPOU.jpg?auth=15fa8459e006061e382ac9ae51c692f070ada1a55e149e077e3f588de7db12d5&width=320&height=180&quality=75&smart=true" 
            alt="Foto de noticia" 
            className='w-full h-full object-cover'/>
        </div>
        <div className='w-full h-full bg-black/70 mask-t-from-50% mask-t-to-100% absolute top-0 left-0'></div>
        <div className='absolute m-3 bg-white p-3 bottom-0'>
          <p className='font-semibold text-xl leading-tight group-hover:underline group-hover:text-primary'>José Jerí: “Este gobierno se va el [28] de julio del 2026, yo no voy a postular a nada”</p>
          <p className='text-sm text-gray-500 mt-2 font-semibold'>15 de noviembre 2025</p>
        </div>
      </div>
    </Link>
  )
}
