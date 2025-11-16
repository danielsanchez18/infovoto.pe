import Link from "next/link"

export const NewCardGeneralPrincipal = () => {
  return (
    <Link href="/noticias/86dc874a-1286-4d98-92f3-0f4b5978c185" target="_blank">
      <div className="h-[30rem] w-full relative overflow-hidden group">
        <img src="https://elcomercio.pe/resizer/v2/DBG3H6XICZEG7AU7KUU4ZJERTQ.jpg?auth=7b51a916fdc8d99547ced0df81872f4fc7e051ae6519a5cbb79b2a17fe86a5d4&width=1200&height=675&quality=75&smart=true" alt="" 
          className="object-cover w-full h-full absolute top-0 left-0"/>
        <div className="absolute bottom-5 left-5 w-[40%] bg-white flex flex-col justify-end to-transparent px-5 py-5">
          <h2 className="text-2xl font-bold group-hover:underline group-hover:text-primary">Los retos urgentes de las regiones del oriente de cara a las elecciones del 2026</h2>
          <p className="mt-2 text-sm line-clamp-4">A menos de dos años de las elecciones del 2026, las regiones del oriente del país enfrentan una serie de desafíos que podrían influir de manera decisiva en la jornada electoral y en la agenda pública de los próximos gobiernos. Mandatarios locales, organizaciones sociales y expertos coinciden en que las problemáticas históricas se están combinando con nuevas tensiones sociales, económicas y ambientales.</p>
        </div>
      </div>
    </Link>
  )
}
