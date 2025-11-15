import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const News = () => {
  return (
    <div>
      {/* Seccion de Noticias */}
      <section className="grid gap-5">
        {/* Título */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Noticias y Anuncios</h2>
            <p className="text-sm text-gray-600 line-clamp-1">
              Sección dedicada a las últimas noticias y anuncios importantes.
            </p>
          </div>
          <Button className="flex items-center gap-x-1 mt-2">
            <p className="hidden md:block">Leer más</p>
            <ChevronRight />
          </Button>
        </div>

        {/* Contenido de Noticias */}
        <div className="grid lg:grid-cols-2 gap-3">
          {/* Noticia Principal */}
          <button className="text-start flex items-center gap-5 lg:col-span-2 group">
            {/* Foto */}
            <div className="bg-gray-200 rounded-xl w-full h-36 lg:h-46 contain-content">
              <img src="https://imgs.search.brave.com/7CNm8UzhdMgJHrIRVVb5X7I25KfdqkFr38Awomml_eA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdt/ZWRpYS5sYXJlcHVi/bGljYS5wZS81NzZ4/MzQwL2xhcmVwdWJs/aWNhL29yaWdpbmFs/LzIwMjUvMTEvMDIv/NjkwNzg3NTA3Mzc5/MjkwYWY5MGY4NmU1/LndlYnA" alt="" 
                className="object-cover h-full w-full group-hover:scale-105 transition duration-300"/>
            </div>

            {/* Contenido */}
            <div className="w-full">
              <h5 className="line-clamp-2 lg:text-xl font-semibold">
                Registran candidatos para elecciones 2026
              </h5>
              <p className="line-clamp-3 max-lg:text-sm text-gray-700 mt-2">
                Ayer - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet sed sit dapibus netus sit auge tristique nunc
                elementum. Amet, massa in donec amet, nec,.
              </p>
            </div>
          </button>

          {/* Segunda Noticia */}
          <button className="text-start flex items-center gap-5 group">
            {/* Foto */}
            <div className="bg-gray-200 rounded-xl w-full h-36 contain-content">
              <img src="https://imgs.search.brave.com/TskXO5iV6WTpthHAlGIUrQRd7-dVBpBHfdg8ubCP6QY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXN0/aW9uLnBlL3Jlc2l6/ZXIvaHEzT3NoRU5f/M0RHUnJsRjRCb2Iz/aWVrZUxBPS8xMzAw/eDgwMC9zbWFydC9m/aWx0ZXJzOmZvcm1h/dChqcGVnKTpxdWFs/aXR5KDc1KS9jbG91/ZGZyb250LXVzLWVh/c3QtMS5pbWFnZXMu/YXJjcHVibGlzaGlu/Zy5jb20vZWxjb21l/cmNpby9UTVBBVU0z/WVlKQUtaREdLVDNC/UE1OMkM3SS5qcGc" alt="" 
                className="object-cover h-full w-full group-hover:scale-105 transition duration-300"/>
            </div>
            {/* Contenido */}
            <div className="w-full">
              <h5 className="line-clamp-2 font-semibold">
                Conoce tus derechos como elector
              </h5>
              <p className="line-clamp-3 text-gray-700 mt-2 text-sm">
                Ayer - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet sed sit dapibus netus sit auge tristique nunc
                elementum. Amet, massa in donec amet, nec,.
              </p>
            </div>
          </button>

          {/* Tercera Noticia */}
          <button className="text-start flex items-center gap-5 group">
            {/* Foto */}
            <div className="bg-gray-200 rounded-xl w-full h-36 contain-content">
              <img src="https://imgs.search.brave.com/MkThA-rB6MN0a1RkG_TFEET_aLhdQdIU7tUa87VOQ2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/cmVzaXplci92Mi9Q/SFlCRDZJWTZSRFFG/TkdDTEQ1SFlHTlNR/SS5qcGc_YXV0aD1h/MTc1ZjU5ZmZhNzM1/NDQ2ZWFjYmMzMWQ1/YTQ3ODE2NGViZWIx/YzhiMDAxODQwOGIx/NzEwM2QyMjE3YjQ2/NTAxJnNtYXJ0PXRy/dWUmd2lkdGg9MzUw/JmhlaWdodD0xOTcm/cXVhbGl0eT04NQ" alt="" 
                className="object-cover h-full w-full group-hover:scale-105 transition duration-300"/>
            </div>
            {/* Contenido */}
            <div className="w-full">
              <h5 className="line-clamp-2 font-semibold">
                Propuestas de agrupaciones políticas
              </h5>
              <p className="line-clamp-3 text-gray-700 mt-2 text-sm">
                Ayer - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet sed sit dapibus netus sit auge tristique nunc
                elementum. Amet, massa in donec amet, nec,.
              </p>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};
