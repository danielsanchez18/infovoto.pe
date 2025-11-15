import { SlotProps } from "./Slot.types";

export default function Slot(props: SlotProps) {
  const { value, label } = props;

  return (
    <div className='flex flex-col gap-1 sm:gap-2 justify-center text-center'>
      <div className='h-12 w-16 sm:h-16 sm:w-20 md:h-20 md:w-24 lg:h-22 lg:w-32 bg-black rounded-md sm:rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold justify-center items-center flex'>
        {value}
      </div>
      <p className="capitalize text-xs sm:text-sm md:text-base">{label}</p>
    </div>
  )
}
