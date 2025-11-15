import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { NewCardComercio } from "./NewCardComercio";

export default function NewsComercioGrid() {
  return (
    <div className="grid gap-5">

      {/* Título de la sección */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h3 className="text-xl font-bold">NOTICIAS -</h3>
          <img src="/img/ElComercio_Logo.svg" alt="Logo El Comercio" className="h-6" />
        </div>
        <Link href="https://elcomercio.pe/" target="_blank">
          <Button>
            Ver más
          </Button>
        </Link>
      </div>

      {/* Principales 3 noticias */}
      <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
        <NewCardComercio />
        <NewCardComercio />
        <NewCardComercio />
      </div>
    </div>
  )
}
