import Link from "next/link";
import { Button } from "../ui/button";
import { MapPinnedIcon, Search } from "lucide-react";
import SearchDialog from "../searchDialog/SearchDialog";
import RegionDialog from "../regionDialog";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-3 justify-between py-4">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-x-3">
        <div className="h-7 w-36 flex pt-3 items-center justify-center">
          <img src="/img/DecidePE - Logo.png" alt="InfoVoto.pe Logo" className="w-full" />
        </div>
        {/* <p className="font-bold text-lg">InfoVoto.pe</p> */}
      </Link>

      {/* Menú de opciones */}
      <div className="flex items-center gap-x-5">

        {/* Botón de Buscar */}
        <SearchDialog />

        {/* Seleccionar tu región */}
        <RegionDialog />
      
      </div>
    </nav>
  );
};
