import Link from "next/link"

export const NewCardGeneralPrincipal = () => {
  return (
    <Link href="">
      <div className="h-[30rem] w-full relative overflow-hidden group">
        <img src="https://elcomercio.pe/resizer/v2/DBG3H6XICZEG7AU7KUU4ZJERTQ.jpg?auth=7b51a916fdc8d99547ced0df81872f4fc7e051ae6519a5cbb79b2a17fe86a5d4&width=1200&height=675&quality=75&smart=true" alt="" 
          className="object-cover w-full h-full absolute top-0 left-0"/>
        <div className="absolute bottom-5 left-5 w-[40%] bg-white flex flex-col justify-end to-transparent px-5 py-5">
          <h2 className="text-2xl font-bold group-hover:underline group-hover:text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos sed fugit.</h2>
          <p className="mt-2 text-sm">Resumen breve de la noticia principal que proporciona una visión general del contenido.</p>
        </div>
      </div>
    </Link>
  )
}
