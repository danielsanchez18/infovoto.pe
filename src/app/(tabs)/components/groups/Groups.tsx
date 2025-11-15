import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Groups = () => {
  return (
    <div>
      <section className="grid gap-10">
        {/* Título */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Agrupaciones Políticas</h2>
            <p className="text-sm text-gray-600 line-clamp-1">
              Compara propuestas y conoce candidatos de tu región.
            </p>
          </div>
          <Link href="/">
            <Button className="flex items-center gap-x-1 mt-2">
              <p className="hidden md:block">Ver más</p>
              <ChevronRight />
            </Button>
          </Link>
        </div>

        {/* Grid de Agrupaciones */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center gap-10 h-auto">
          {/* Agrupacion Politica 1 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://imgs.search.brave.com/yddWmbMMPPSwRazA7tw-qNIbYFH7lpQTfihtUXp18hI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0xvZ29fZGVf/ZnVlcnphX3BvcHVs/YXJfMjAyNF9wbmcu/cG5n"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqb_XcyhL1p_MJRzCHuW9qWMWiWOdWlzwZkpM_elUHGWpTCUUb-AbIP3pPS45KWQ3Tkvw&usqp=CAU"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Fuerza Popular</h5>
              <p className="text-sm text-gray-600">1232 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 2 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Logo_Renovaci%C3%B3n_Popular_2023.png"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://elmontonero.pe/upload/uploads_autores/rafael_lopez_aliaga2.png"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Renovación Popular</h5>
              <p className="text-sm text-gray-600">1132 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 3 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://pbs.twimg.com/profile_images/1869113760721317888/s943kuwS_400x400.jpg"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://www.planetadelibros.com.pe/usuaris/autores/fotos/900005/original/900004432_1_HDS-CMS_202110141620.png"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Avanza País</h5>
              <p className="text-sm text-gray-600">1132 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 1 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://imgs.search.brave.com/yddWmbMMPPSwRazA7tw-qNIbYFH7lpQTfihtUXp18hI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0xvZ29fZGVf/ZnVlcnphX3BvcHVs/YXJfMjAyNF9wbmcu/cG5n"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqb_XcyhL1p_MJRzCHuW9qWMWiWOdWlzwZkpM_elUHGWpTCUUb-AbIP3pPS45KWQ3Tkvw&usqp=CAU"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Fuerza Popular</h5>
              <p className="text-sm text-gray-600">1232 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 2 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Logo_Renovaci%C3%B3n_Popular_2023.png"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://elmontonero.pe/upload/uploads_autores/rafael_lopez_aliaga2.png"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Renovación Popular</h5>
              <p className="text-sm text-gray-600">1132 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 3 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://pbs.twimg.com/profile_images/1869113760721317888/s943kuwS_400x400.jpg"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://www.planetadelibros.com.pe/usuaris/autores/fotos/900005/original/900004432_1_HDS-CMS_202110141620.png"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Avanza País</h5>
              <p className="text-sm text-gray-600">1132 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 1 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://imgs.search.brave.com/yddWmbMMPPSwRazA7tw-qNIbYFH7lpQTfihtUXp18hI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0xvZ29fZGVf/ZnVlcnphX3BvcHVs/YXJfMjAyNF9wbmcu/cG5n"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqb_XcyhL1p_MJRzCHuW9qWMWiWOdWlzwZkpM_elUHGWpTCUUb-AbIP3pPS45KWQ3Tkvw&usqp=CAU"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Fuerza Popular</h5>
              <p className="text-sm text-gray-600">1232 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 2 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Logo_Renovaci%C3%B3n_Popular_2023.png"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://elmontonero.pe/upload/uploads_autores/rafael_lopez_aliaga2.png"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Renovación Popular</h5>
              <p className="text-sm text-gray-600">1132 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 3 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://pbs.twimg.com/profile_images/1869113760721317888/s943kuwS_400x400.jpg"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://www.planetadelibros.com.pe/usuaris/autores/fotos/900005/original/900004432_1_HDS-CMS_202110141620.png"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Avanza País</h5>
              <p className="text-sm text-gray-600">1132 votaciones</p>
            </div>
          </Link>

          {/* Agrupacion Politica 1 */}
          <Link href="/" className="gap-y-5 flex flex-col items-center group">
            <div className="w-28 h-28 flex items-center justify-center contain-content relative">
              <img
                src="https://imgs.search.brave.com/yddWmbMMPPSwRazA7tw-qNIbYFH7lpQTfihtUXp18hI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0xvZ29fZGVf/ZnVlcnphX3BvcHVs/YXJfMjAyNF9wbmcu/cG5n"
                alt="" className="absolute top-0 start-0 w-full group-hover:opacity-0 transition duration-500 z-10 hover:z-0"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqb_XcyhL1p_MJRzCHuW9qWMWiWOdWlzwZkpM_elUHGWpTCUUb-AbIP3pPS45KWQ3Tkvw&usqp=CAU"
                alt="" className="absolute top-0 start-0 h-full opacity-0 group-hover:opacity-100 transition duration-500 z-0 hover:z-10 object-cover w-full"
              />
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-center line-clamp-2 text-lg leading-none">Fuerza Popular</h5>
              <p className="text-sm text-gray-600">1232 votaciones</p>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
};
