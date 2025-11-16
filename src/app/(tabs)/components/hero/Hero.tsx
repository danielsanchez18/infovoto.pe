import { ArrowUpIcon, Plus, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center mt-20">
      <h1 className="text-3xl font-bold">¿Conoces a los candidatos para las elecciones de 2026?</h1>
      <p className="text-lg text-gray-600 mt-1 max-w-3xl">Realiza tus consultas sobre los candidatos y sus propuestas para tomar una decisión informada en las próximas elecciones.</p>
      <InputGroup className="mt-10 max-w-4xl w-full">
        <InputGroupTextarea placeholder="Pregunta, busca o consulta..." />
        <InputGroupAddon align="block-end" className="justify-end">
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            disabled
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}