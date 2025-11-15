import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-3 justify-between py-4">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-x-3">
        <div className="size-7 rounded-md bg-gray-200"></div>
        <p className="font-bold text-lg">InfoVoto.pe</p>
      </Link>

      {/* Menú de opciones */}
      <div className="flex items-center gap-x-5">

        {/* Botón de Buscar */}
        <button className="flex items-center gap-x-2 text-sm font-semibold">
          <Search size={16} />
          <p>Buscar</p>
        </button>

        {/* Seleccionar tu región */}
        <Button>
          Seleccionar tu región
        </Button>
      
      </div>
    </nav>
  );
};
