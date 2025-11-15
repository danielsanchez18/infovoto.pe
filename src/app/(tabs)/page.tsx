import Countdown from "@/components/countdown";
import { Groups } from "./components/groups/Groups";
import { Info } from "./components/info/Info";
import { News } from "./components/news/News";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-10 grid gap-32">
      <News />
      <div className="grid gap-5">
        <Countdown />
        <Link href="/fechas" className="w-fit mx-auto mt-5">
          <Button className="text-lg px-5 py-5">
            Ver calendario completo
          </Button>
        </Link>
      </div>
      <Groups />
      <Info />
    </div>
  );
}
