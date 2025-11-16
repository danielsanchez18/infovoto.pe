import { Profile } from "./components/profile/Profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Proposals } from "./components/proposals/Proposals";
import { WorkExperience } from "./components/work-experience/WorkExperience";
import { Posts } from "./components/posts/Posts";

export default function CandidatoIdPage() {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-5 gap-x-10 py-10">
      <div className="relative">
        <div className="sticky top-5">
          <Profile />
        </div>
      </div>

      <div className="overflow-y-auto">
        {/* Tabs */}
        <Tabs className="flex flex-col gap-10" defaultValue="proposals">
          <div className="flex w-full items-center justify-between">
            <TabsList className="flex items-center gap-2 bg-white">
              <TabsTrigger
                value="proposals"
                className="text-xs px-3 h-6 md:text-sm md:px-4 md:h-9 bg-primary/60 cursor-pointer text-white rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Porpuestas
              </TabsTrigger>
              <TabsTrigger
                value="work-experience"
                className="text-xs px-3 h-6 md:text-sm md:px-4 md:h-9 bg-primary/60 cursor-pointer text-white rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Hoja de vida
              </TabsTrigger>
              <TabsTrigger
                value="posts"
                className="text-xs px-3 h-6 md:text-sm md:px-4 md:h-9 bg-primary/60 cursor-pointer text-white rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Publicaciones
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="proposals">
            <Proposals />
          </TabsContent>
          <TabsContent value="work-experience">
            <WorkExperience />
          </TabsContent>
          <TabsContent value="posts">
            <Posts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
