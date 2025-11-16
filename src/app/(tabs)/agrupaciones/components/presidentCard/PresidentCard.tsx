import Link from "next/link";
import { AcceptanceRate } from "../acceptanceRate";

export default function PresidentCard() {

  return (
    <Link href="/agrupaciones/renovacion-popular" className="no-underline">
      <div className=" bg-slate-900 h-150 w-full flex-col border">
        <div className="flex flex-col -space-y-9 font-bold uppercase text-center">
          <img className="w-full h-85 bg-black mask-b-from-85% mask-b-to-100% object-cover" src="https://saludconlupa.com/media/images/Rafael-Lopez-Aliaga.2e16d0ba.fill-300x300.jpg" />
          <h2 className="text-xl text-white z-2">Rafael López Aliaga</h2>
        </div>
        <div className="flex flex-col gap-5 text-center uppercase">
          <p className="text-lg font-bold text-white ">Renovación popular</p>
          <AcceptanceRate />
        </div>
      </div>
    </Link>
  )
}