import NewsComercioGrid from "./components/news-comercio/NewsComercioGrid";
import { NewsGeneralGrid } from "./components/news-general/NewsGeneralGrid";

export default function NoticiasPage() {
  return (
    <div className="py-10 grid gap-32">
      <NewsGeneralGrid />
      <NewsComercioGrid />
    </div>
  )
}
