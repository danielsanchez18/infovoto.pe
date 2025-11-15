import Countdown from "@/components/countdown";
import Timelines from "./components/timelines";

export default function FechasPage() {
  return (
    <div className='flex flex-col gap-10 py-10'>
      <Countdown />
      <Timelines />
    </div>
  )
}
