import { eventsTimelineData } from './EventTimeline.data'

export default function EventTimeline() {

  return (
    <div>
      {eventsTimelineData.map(({ year, months }) => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">{year}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8'>
            {months.map(({ month, events }) => (
              <div key={month} className="mb-6 flex gap-4 h-fit">
                <h3 className="text-base md:text-lg font-semibold w-20 md:w-27 shrink-0">{month}</h3>
                <div className="relative flex-1">
                  <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-black" />
                  <ul className="pl-4 md:pl-6 space-y-4">
                    {events.map(({ order, description }) => (
                      <li key={order} className="relative text-sm md:text-base">
                        <div className="absolute -left-[21px] md:-left-[29px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-white" />
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
