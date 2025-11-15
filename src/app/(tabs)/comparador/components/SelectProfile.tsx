import { ChevronDown, Search } from "lucide-react";

export const SelectProfile = () => {
  return (
    <div className="grid">
      
      {/* Select Profile */}
      <div className="grid gap-y-2 px-5">
        {/* <label className="text-sm font-semibold">Candidato 1</label> */}

        <button className="w-full border border-gray-300 rounded-lg px-5 py-3 text-sm flex items-center justify-between hover:border-primary hover:bg-gray-50">
          Seleccionar perfil
          <ChevronDown className="size-5 text-gray-500" />
        </button>

        {/* Mostrar candidatos */}
        <div className="grid p-3 rounded-lg border border-gray-300 w-full gap-y-5">
          
          {/* Input de buscar */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 translate-y-1/2 size-4 mt-0.5 text-gray-500" />
            <input type="text"
              placeholder="Buscar por partido o candidato"
              className="w-full border border-gray-300 rounded-md pl-10 px-3 py-2 text-sm" />
          </div>

          {/* Mostrar resultados */}
          <div className="w-ful grid gap-5">
            {/* Partido y candidato resultados */}
            <div className="grid">

              {/* Partido */}
              <div className="pb-3 border-b border-gray-300 flex items-center gap-x-2">
                <div className="size-5">
                  <img src="https://imgs.search.brave.com/yddWmbMMPPSwRazA7tw-qNIbYFH7lpQTfihtUXp18hI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0xvZ29fZGVf/ZnVlcnphX3BvcHVs/YXJfMjAyNF9wbmcu/cG5n" alt="" 
                    className="object-cover h-full w-full"/>
                </div>
                <p className="text-sm font-semibold">FUERZA POPULAR</p>
              </div>

              {/* Candidatos */}
              <div className="">
                <button className="py-2.5 flex items-center gap-x-2 hover:bg-gray-100 w-full px-2 rounded-md">
                  <div className="size-7 rounded-full">
                    <img src="https://imgs.search.brave.com/A_GqmpJVFz0VNbLTwg0ZbBNZCZnvqCs4SX4vBqRxAtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZXJ1/cmVwb3J0cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUva2Vpa28tZnVq/aW1vcmkuanBn" alt=""
                      className="rounded-full object-cover w-full h-full"/>
                  </div>
                  <p className="text-sm font-semibold">KEIKO FUJIMORI</p>
                </button>
              </div>
            </div>

            {/* Partido y candidato resultados */}
            <div className="grid">

              {/* Partido */}
              <div className="pb-3 border-b border-gray-300 flex items-center gap-x-2">
                <div className="size-5">
                  <img src="https://imgs.search.brave.com/yddWmbMMPPSwRazA7tw-qNIbYFH7lpQTfihtUXp18hI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0xvZ29fZGVf/ZnVlcnphX3BvcHVs/YXJfMjAyNF9wbmcu/cG5n" alt="" 
                    className="object-cover h-full w-full"/>
                </div>
                <p className="text-sm font-semibold">FUERZA POPULAR</p>
              </div>

              {/* Candidatos */}
              <div className="">
                <button className="py-2.5 flex items-center gap-x-2 hover:bg-gray-100 w-full px-2 rounded-md">
                  <div className="size-7 rounded-full">
                    <img src="https://imgs.search.brave.com/A_GqmpJVFz0VNbLTwg0ZbBNZCZnvqCs4SX4vBqRxAtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZXJ1/cmVwb3J0cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUva2Vpa28tZnVq/aW1vcmkuanBn" alt=""
                      className="rounded-full object-cover w-full h-full"/>
                  </div>
                  <p className="text-sm font-semibold">KEIKO FUJIMORI</p>
                </button>
              </div>
            </div>

            {/* Partido y candidato resultados */}
            <div className="grid">

              {/* Partido */}
              <div className="pb-3 border-b border-gray-300 flex items-center gap-x-2">
                <div className="size-5">
                  <img src="https://imgs.search.brave.com/yddWmbMMPPSwRazA7tw-qNIbYFH7lpQTfihtUXp18hI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0xvZ29fZGVf/ZnVlcnphX3BvcHVs/YXJfMjAyNF9wbmcu/cG5n" alt="" 
                    className="object-cover h-full w-full"/>
                </div>
                <p className="text-sm font-semibold">FUERZA POPULAR</p>
              </div>

              {/* Candidatos */}
              <div className="">
                <button className="py-2.5 flex items-center gap-x-2 hover:bg-gray-100 w-full px-2 rounded-md">
                  <div className="size-7 rounded-full">
                    <img src="https://imgs.search.brave.com/A_GqmpJVFz0VNbLTwg0ZbBNZCZnvqCs4SX4vBqRxAtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZXJ1/cmVwb3J0cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUva2Vpa28tZnVq/aW1vcmkuanBn" alt=""
                      className="rounded-full object-cover w-full h-full"/>
                  </div>
                  <p className="text-sm font-semibold">KEIKO FUJIMORI</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Profile Info */}
    </div>
  );
};
