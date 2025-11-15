import Milestone from "../milestone"
import { membersTimelineData } from "./MemberTimeline.data"

export default function MemberTimeline() {

  return (
    <div className="flex flex-col gap-6 items-center mt-8">
      {membersTimelineData.map((milestone, index) => (
        <>
          <Milestone 
            key={index} 
            {...milestone} 
            align={index % 2 === 0 ? "left" : "right"}
          />
          {index < membersTimelineData.length - 1 && (
            <div className="border-r h-12 border-black"></div>
          )}
        </>
      ))}
    </div>
  )
}
