import { Button } from "@/components/ui/button";
import Candidates from "./sections/Candidates";

export default function RenovacionPopularPage() {
  return (
  <div className="flex flex-col gap-4 w-full pb-10">
    <div className="flex flex-row justify-between items-center pt-10">
      <img className="w-96" src="https://renovacionpopular.com.pe/wp-content/uploads/2021/04/cropped-Mesa-de-trabajo-1-1.png" alt="renovacion-popular-logo" />
      <Button>Plan de Gobierno</Button>
    </div>
    <Candidates />

    <div className="flex w-full justify-center pt-10"><Button>Ver más</Button></div>


  </div>
);
}