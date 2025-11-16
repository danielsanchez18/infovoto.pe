import { Button } from "@/components/ui/button";
import CandidateGrid from "./components/candidate-grid/CandidateGrid";

export default function AgrupacionesIdPage() {
  return (
  <div className="flex flex-col gap-4 w-full pb-10">
    <div className="flex flex-row justify-between items-center pt-10">
      <img className="w-96" src="https://renovacionpopular.com.pe/wp-content/uploads/2021/04/cropped-Mesa-de-trabajo-1-1.png" alt="renovacion-popular-logo" />
      <Button>Plan de Gobierno</Button>
    </div>

    <CandidateGrid />
    <div className="flex w-full justify-center pt-10">
      <Button>Cargar más</Button>
    </div>

  </div>
);
}