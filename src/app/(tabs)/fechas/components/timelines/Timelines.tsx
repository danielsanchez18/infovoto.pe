import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import EventTimeline from "../eventTimeline";
import MemberTimeline from "../memberTimeline";

export default function Timelines() {
  return (
    <Tabs className="flex flex-col gap-5" defaultValue="events">
      <div className="flex w-full items-center justify-between">
        <p className="text-lg md:text-xl font-semibold">Línea de tiempo</p>
        <TabsList className="flex items-center gap-2 bg-white">
          <TabsTrigger value="events" className="text-xs px-3 h-6 md:text-sm md:px-4 md:h-9 bg-primary/70 cursor-pointer text-white rounded-md data-[state=active]:bg-primary data-[state=active]:text-white">
            Eventos
          </TabsTrigger>
          <TabsTrigger value="members" className="text-xs px-3 h-6 md:text-sm md:px-4 md:h-9 bg-primary/70 cursor-pointer text-white rounded-md data-[state=active]:bg-primary data-[state=active]:text-white">
            Miembros de mesa
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="events">
        <EventTimeline />
      </TabsContent>
      <TabsContent value="members">
        <MemberTimeline />
      </TabsContent>
    </Tabs>
  )
}
