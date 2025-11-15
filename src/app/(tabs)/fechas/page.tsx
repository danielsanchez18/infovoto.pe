import Countdown from "@/components/countdown";
import Timelines from "./components/timelines";

export default function FechasPage() {
  return (
    <div className='flex flex-col gap-10 py-10'>
      <div className='flex flex-col text-center'>
        <h1 className='text-xl font-semibold'>!Cuenta atrás para las elecciones presidenciales 2026!</h1>
        <h2 className="text-sm text-gray-600">
          Mantente informado: revisa plazos de inscripción, debates y cómo votar para que estés listo el día de las elecciones.
        </h2>
        <Countdown />
      </div>
      <Timelines />
    </div>
  )
}
