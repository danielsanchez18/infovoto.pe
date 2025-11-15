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
        <p className="text-xl font-semibold">Línea de tiempo</p>
        <TabsList className="flex items-center gap-2 bg-white">
          <TabsTrigger value="events" className="text-sm px-4 h-9 bg-black cursor-pointer text-white rounded-md data-[state=active]:bg-gray-700/70 data-[state=active]:text-white">
            Eventos
          </TabsTrigger>
          <TabsTrigger value="members" className="text-sm px-4 h-9 bg-black cursor-pointer text-white rounded-md data-[state=active]:bg-gray-700/70 data-[state=active]:text-white">
            Miémbros de mesa
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
