import { PostsFilters } from "./componentes/posts-filters/PostsFilters";
import { PostsGrid } from "./componentes/posts-grid/PostsGrid";

export default function PublicacionesPage() {
  return (
    <div className="py-10 grid gap-y-10">
      
      {/* Título Section */}
      <section className="flex items-center gap-x-5">
        
        {/* Logo del partido */}
        <div className="h-12">
          <img src="https://imgs.search.brave.com/4ObaeoBgk19peQs1JELoqIbjqShZNOTA210yp2uVPTs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBlL0xvZ29fZGVf/UmVub3ZhY2klQzMl/QjNuX1BvcHVsYXJf/KFBlciVDMyVCQSku/cG5n" alt="" 
            className="h-full object-cover"/>
        </div>

        {/* titulo y subtítulo */}
        <div>
          <p className="uppercase font-semibold text-lg leading-tight">RENOVACIÓN POULAR</p>
          <p className="text-sm leading-tight">Publicaciones</p>
        </div>
      </section>


      {/* Posts Grid Section */}
      <section className="grid grid-cols-[1fr_2fr] gap-x-5">
        <PostsFilters />
        <PostsGrid />
      </section>

    </div>
  )
}
