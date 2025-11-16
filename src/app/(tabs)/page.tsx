import Countdown from "@/components/countdown";
import { Groups } from "./components/groups/Groups";
import { Info } from "./components/info/Info";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NewsGeneralGrid } from "./components/news-general/NewsGeneralGrid";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="py-10 grid gap-32">
      <Hero />
      <NewsGeneralGrid />
      <div className="grid gap-5">
        <Countdown />
        <Link href="/fechas" className="w-fit mx-auto mt-5">
          <Button className="text-lg px-5 py-6">
            Ver calendario completo
          </Button>
        </Link>
      </div>
      <Groups />
      <Info />
    </div>
  );
}
