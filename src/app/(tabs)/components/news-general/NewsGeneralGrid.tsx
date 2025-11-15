import React from "react";
import { NewCardGeneralPrincipal } from "./NewCardGeneralPrincipal";
import { NewCardGeneral } from "./NewCardGeneral";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewCardGeneralVertical } from "./NewCardGeneralVertical";

export const NewsGeneralGrid = () => {
  return (
    <div className="grid gap-5">
      {/* Título de la sección */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Última hora</h3>

        <Link href="/noticias">
          <Button className="flex items-center gap-x-1 mt-2">
            <p className="hidden md:block">Ver más</p>
            <ChevronRight />
          </Button>
        </Link>
      </div>

      {/* Contenido de noticias */}
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <NewCardGeneralPrincipal />
        </div>
        <div className="row-span-2">
          <NewCardGeneralVertical />  
        </div>
        <NewCardGeneral />
        <NewCardGeneral />
        <NewCardGeneral />
      </div>
    </div>
  );
};
