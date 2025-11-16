import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MessageCircleWarning } from "lucide-react"

export default function Info() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <MessageCircleWarning className="h-6 cursor-pointer" />       
      </TooltipTrigger>
      <TooltipContent>
        <p>Recuerda que esto es una simulación y no un voto real.</p>
      </TooltipContent>
    </Tooltip>
  )
}
