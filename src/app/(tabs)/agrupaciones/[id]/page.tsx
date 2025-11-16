"use client"

import { Button } from "@/components/ui/button";
import CandidateGrid from "./components/candidate-grid/CandidateGrid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AgrupacionesIdPage() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full pb-10">
      <div className="flex flex-row justify-between items-center mt-5">
        {/* Título Section */}
        <section className="flex items-center gap-x-5">

          {/* Logo del partido */}
          <div className="h-12">
            <img src="https://imgs.search.brave.com/4ObaeoBgk19peQs1JELoqIbjqShZNOTA210yp2uVPTs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBlL0xvZ29fZGVf/UmVub3ZhY2klQzMl/QjNuX1BvcHVsYXJf/KFBlciVDMyVCQSku/cG5n" alt=""
              className="h-full object-cover" />
          </div>

          {/* titulo y subtítulo */}
          <div>
            <p className="uppercase font-semibold text-lg leading-tight">RENOVACIÓN POULAR</p>
            <p className="text-sm leading-tight">Plancha electoral</p>
          </div>
        </section>
        <div className="flex gap-2 items-center">
          <Link href={`${pathname}/publicaciones`}>
            <Button >Publicaciones</Button>
          </Link>
          <Button>Plan de gobierno</Button>
        </div>
      </div>
      <CandidateGrid />
    </div>
  );
}