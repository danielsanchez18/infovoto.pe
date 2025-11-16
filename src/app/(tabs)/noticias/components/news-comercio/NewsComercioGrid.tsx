import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { NewCardComercio, NewsComercio } from "./NewCardComercio";

const SAMPLE_NEWS: NewsComercio[] = [
  {
    id: "1",
    category: "ELECCIONES 2026",
    categoryUrl: "/buscar/ELECCIONES-2026",
    title: "Elecciones 2026: Perú Primero recicla a dos candidatos denunciados por agresión",
    url: "https://elcomercio.pe/politica/peru-primero-recicla-a-dos-candidatos-denunciados-por-agresion-martin-vizcarra-carlos-juscamayta-emilio-nicolich-tlcnota-noticia/",
    imageUrl: "https://elcomercio.pe/resizer/v2/SNLN6LUTWJGRZJFFX2IV7Q36TY.png?auth=a2598c364a0e241af789f28077b9dea74080102de0e954974c77f32fd99f2e75&width=320&height=180&quality=75&smart=true"
  },
  {
    id: "2",
    category: "POLÍTICA",
    categoryUrl: "/buscar/POLITICA",
    title: "37 muertos por culpa de un conductor alcoholizado: quién es el hombre detrás del volante",
    url: "https://elcomercio.pe/peru/accidente-en-arequipa-que-dejo-36-muertos-quien-es-el-presunto-responsable-detenido-cuyo-dosaje-etilico-dio-positivo-tlcnota-noticia/",
    imageUrl: "https://elcomercio.pe/resizer/v2/NKUGQKBNFBFRNEWCQGKPL34R7M.jpg?auth=3c57c660810dc6b8a4fc302b1b2f72c1176d107ca9ffa71ae5888d17de0f748d&width=320&height=180&quality=75&smart=true"
  },
  {
    id: "3",
    category: "ACTUALIDAD",
    categoryUrl: "/buscar/ACTUALIDAD",
    title: "Congreso amplía de 48 horas a 15 días la detención por sicariato y extorsión: ¿Cuándo entrará en vigencia y qué resultados puede tener?",
    url: "https://elcomercio.pe/peru/congreso-dictamen-del-congreso-amplia-de-48-horas-a-15-dias-la-detencion-por-sicariato-y-extorsion-cuando-entrara-en-vigencia-extorsion-sicariato-detencion-preventiva-flagrancia-noticia/",
    imageUrl: "https://elcomercio.pe/resizer/v2/PQB5ZXNEDBFQVAZD5AX4MVZGSU.jpg?auth=31e46127d35b030887c5d4e9fe660447d51286d6fe7ec7d1da5880c55a3fc469&width=320&height=180&quality=75&smart=true"
  }
];

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
        {SAMPLE_NEWS.map((news) => (
          <NewCardComercio key={news.id} news={news} />
        ))}
      </div>
    </div>
  )
}
