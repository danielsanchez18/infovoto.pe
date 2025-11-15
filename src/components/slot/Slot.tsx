import { SlotProps } from "./Slot.types";

export default function Slot(props: SlotProps) {
  const { value, label } = props;

  return (
    <div className='flex flex-col gap-2 jusitify-center text-center'>
      <p className='h-22 w-32 bg-black rounded-lg text-6xl text-white font-bold justify-center items-center flex'>
        {value}
      </p>
      <p className="capitalize">{label}</p>
    </div>
  )
}
