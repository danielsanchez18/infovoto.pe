import { ChevronDown, Search } from "lucide-react";

export const SelectProfile = () => {
  return (
    <div className="grid gap-y-10">
      {/* Select Profile */}
      <div className="grid gap-y-2">
        <button className="w-full border border-gray-300 rounded-lg px-5 py-3 text-sm flex items-center justify-between hover:border-primary hover:bg-gray-50">
          Seleccionar perfil
          <ChevronDown className="size-5 text-gray-500" />
        </button>

        {/* Mostrar candidatos */}
        <div className="grid p-3 rounded-lg border border-gray-300 w-full gap-y-2">
          {/* Input de buscar */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 translate-y-1/2 size-4 mt-0.5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar por partido o candidato"
              className="w-full border border-gray-300 rounded-md pl-10 px-3 py-2 text-sm focus:outline-primary focus:border-primary"
            />
          </div>

          {/* Mostrar resultados - Presidente */}
          <div className="w-full grid divide-y divide-gray-200">
            <button className="flex items-center text-sm font-medium gap-x-2 px-3 py-3.5 hover:bg-gray-100">
              
              <div className="line-clamp-1 size-7 rounded-full bg-gray-600 contain-content">
                <img src="/img/keiko_example.png" alt="" className="w-full h-full object-cover"/>
              </div>
              
              <p>KEIKO SOFIA FUJIMORI FUJIMORI</p>
              <p>-</p>
              <p>Fuerza Popular</p>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="grid">
        {/* Detalles Básicos */}
        <div className="flex flex-col items-center justify-center gap-y-1">
          {/* Foto */}
          <div className="mb-3 size-80 contain-content">
            <img src="/img/keiko_example.png" alt="" className="w-full h-full object-cover"/>
          </div>

          <h4 className="text-lg font-semibold line-clamp-2 lg:text-xl">
            Keiko Fujimori
          </h4>
          <p className="text-primary text-sm font-semibold uppercase">
            Fuerza popular
          </p>
          <p className="text-gray-600 text-sm font-medium uppercase">26 años</p>
        </div>
      </div>
    </div>
  );
};
