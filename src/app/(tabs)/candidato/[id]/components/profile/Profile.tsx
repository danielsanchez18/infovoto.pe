import { AlertTriangleIcon } from "lucide-react";
import React from "react";

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
      <div className="mt-5 pt-5 border-t border-gray-300">

        <div className="flex gap-x-3">
          <div className="size-14 bg-amber-500 rounded-full flex items-center justify-center">
            <AlertTriangleIcon className="size-7 text-white" />
          </div>

          <div>
            <h4 className="text-lg font-semibold">1 investigación en curso</h4>
            <p className="text-sm">Presunta colusión</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mt-4">Fuente: Jurado Nacional de Elecciones (JNE).</p>
            <p className="text-sm text-gray-600"> Actualizado al 16 de noviembre de 2025</p>
        </div>

      </div>
    </div>
  );
};
