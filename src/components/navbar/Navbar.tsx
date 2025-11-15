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
        <div className="size-7">
          <img src="/favicon.ico" alt="InfoVoto.pe Logo" />
        </div>
        <p className="font-bold text-lg">InfoVoto.pe</p>
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
