import { ChevronLeft, ChevronRight } from "lucide-react";

export const Ranking = () => {
  return (
    <div className="grid gap-5">
      {/* Titulo */}
      <div className="flex items-center gap-x-5 justify-between">
        <h2 className="text-xl font-semibold">Agrupaciones más votadas</h2>

        <div className="flex items-center gap-x-1">
          <button className="border rounded-lg border-gray-200 items-center justify-center p-1">
            <ChevronLeft className="size-5 text-gray-600" />
          </button>
          <button className="border rounded-lg border-gray-200 items-center justify-center p-1">
            <ChevronRight className="size-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="">
        
      </div>
    </div>
  );
};
