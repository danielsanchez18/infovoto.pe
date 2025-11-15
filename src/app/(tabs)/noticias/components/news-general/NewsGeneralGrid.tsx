import React from "react";
import { NewCardGeneralPrincipal } from "./NewCardGeneralPrincipal";
import { NewCardGeneral } from "./NewCardGeneral";
import { Button } from '@/components/ui/button';

export const NewsGeneralGrid = () => {
  return (
    <div className="grid gap-5">
      {/* Contenido de noticias */}
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3">
          <NewCardGeneralPrincipal />
        </div>
        <NewCardGeneral />
        <NewCardGeneral />
        <NewCardGeneral />
        <NewCardGeneral />
        <NewCardGeneral />
        <NewCardGeneral />
      </div>

      <Button className="text-base py-5 w-fit mx-auto">Cargar más</Button>
    </div>
  );
};
