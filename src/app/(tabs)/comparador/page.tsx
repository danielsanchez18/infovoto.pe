import Link from "next/link";
import { SelectProfile } from './components/SelectProfile';

export default function ComparadorPage() {
  return (
    <div className="flex flex-col gap-10 py-10">
      {/* Titulo */}
      <div className="grid gap-y-2">
        <h3 className="text-xl font-semibold text-center">
          Compara Perfiles y Propuestas
        </h3>

        <div className="flex items-center w-fit mx-auto gap-x-3">
          <Link
            href="/"
            className="text-sm text-primary flex items-center gap-x-1 hover:underline mx-auto font-semibold">
            Cambiar categoría
          </Link>

          <div className="text-gray-300">/</div>

          <Link
            href="/"
            className="text-primary text-sm flex items-center gap-x-1 hover:underline mx-auto font-semibold">
            Ver todos los perfiles
          </Link>
        </div>
      </div>

      {/* Contenido */}
      <div className="grid grid-cols-2">
        <div className="border-r border-gray-300">
            <SelectProfile />
        </div>
        <SelectProfile />
      </div>
    </div>
  );
}
