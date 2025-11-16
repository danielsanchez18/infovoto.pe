'use client';

import Countdown from "@/components/countdown";
import { Groups } from "./components/groups/Groups";
import { Info } from "./components/info/Info";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NewsGeneralGrid } from "./components/news-general/NewsGeneralGrid";
import Hero from "./components/hero";
import { useDriverTour } from "./hooks/useDriverTour";
import { HelpCircle } from "lucide-react";

export default function Home() {
  const { startTour } = useDriverTour();

  return (
    <div className="py-10 grid gap-32">
      {/* Floating Tour Button */}
      <button
        onClick={startTour}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 group"
        aria-label="Iniciar tour guiado"
      >
        <HelpCircle className="size-5" />
      </button>

      <div id="hero-chatbot">
        <Hero />
      </div>

      <div id="news-section">
        <NewsGeneralGrid />
      </div>

      <div className="grid gap-5">
        <div id="countdown-section">
          <Countdown />
        </div>
        <Link href="/fechas" id="calendar-link" className="w-fit mx-auto mt-5">
          <Button className="text-lg px-5 py-6">
            Ver calendario completo
          </Button>
        </Link>
      </div>

      <div id="groups-section">
        <Groups />
      </div>

      <div id="info-section">
        <Info />
      </div>
    </div>
  );
}
