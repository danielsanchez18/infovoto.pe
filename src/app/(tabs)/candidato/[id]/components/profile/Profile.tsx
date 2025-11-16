import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertTriangleIcon, Info, AlertTriangle } from "lucide-react";

export const Profile = () => {
  return (
    <div className="grid gap-y-3 w-full">
      <div className="h-72">
        <img
          src="/img/lopez-aliaga-profile.png"
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Rafael Bernardo Lopez Aliaga</h1>
        <p className="text-gray-600">
          Candidato a la Presidencia de la República
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="h-8">
          <img
            src="https://imgs.search.brave.com/4ObaeoBgk19peQs1JELoqIbjqShZNOTA210yp2uVPTs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBlL0xvZ29fZGVf/UmVub3ZhY2klQzMl/QjNuX1BvcHVsYXJf/KFBlciVDMyVCQSku/cG5n"
            alt=""
            className="h-full object-cover"
          />
        </div>
        <p className="text-sm font-semibold"> - RENOVACIÓN POPULAR</p>
      </div>

      {/* Investigaciones */}
      <article className="rounded-lg items-center flex gap-x-3 border border-amber-600 bg-amber-100 px-3 py-2">
        <AlertTriangle className="size-7 min-w-7" />

        <div className="w-full">
          <h3 className="font-semibold text-sm">1 investigación en curso</h3>
          <p className="text-xs font-medium">Presunta colusión</p>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button" className="cursor-help">
              <Info className="size-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-center">
              Fuente: Jurado Nacional de Elecciones (JNE). <br /> Actualizado al
              16 de noviembre de 2025
            </p>
          </TooltipContent>
        </Tooltip>
      </article>
    </div>
  );
};
