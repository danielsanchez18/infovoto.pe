import Link from 'next/link'

export const NewCardGeneral = () => {
  return (
    <Link href="/noticia/86dc874a-1286-4d98-92f3-0f4b5978c185" className='grid gap-y-3 group'>
      <img src="https://imgs.search.brave.com/3Xl0RHexHvOGrDU7tic-GBlgNHlW4QZjteVTwWH9WFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mLnJw/cC1ub3RpY2lhcy5p/by8yMDI1LzA5LzI0/LzA4NDgwOF8xNzk1/MzUxLmpwZz9pbWdk/aW1lbnNpb249bG9v/aw" 
        alt="Portada noticia" 
        className="h-40 w-full bg-gray-200"/>

      <div>
        <h4 className='font-semibold group-hover:underline group-hover:text-primary line-clamp-4'>Las Elecciones 2026 y la alerta de una brecha presupuestal de más de S/500 millones: los riesgos que se advierten desde el JNE</h4>
        <span className='text-sm text-gray-500'>12 de junio de 2024</span>
      </div>
    </Link>
  )
}
