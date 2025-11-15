import { MilestoneProps } from "./Milestone.types";

export default function Milestone(props: MilestoneProps) {
    const { image, date, title, description, align } = props;

    switch (align) {
        case 'right':
            return (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-start w-full max-w-3xl px-4 sm:px-0">
                    {/* <img src={image} alt="" className="h-32 w-full sm:h-45 sm:w-90 rounded-lg object-cover" /> */}
                    <div className="h-32 w-full sm:h-36 sm:w-72 md:h-45 md:w-90 sm:min-w-72 md:min-w-90 rounded-lg bg-black/10 flex items-center justify-center order-1 sm:order-none"></div>
                    <div className="flex flex-col items-start flex-1 order-2 sm:order-none">
                        <span className="text-xs sm:text-sm text-gray-600 mb-1">{date}</span>
                        <p className="text-base sm:text-lg md:text-xl font-semibold mb-2">{title}</p>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{description}</p>
                    </div>
                </div>
            )
        default:
            return (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-start w-full max-w-3xl px-4 sm:px-0">
                    <div className="flex flex-col items-start flex-1 order-2 sm:order-none">
                        <span className="text-xs sm:text-sm text-gray-600 mb-1">{date}</span>
                        <p className="text-base sm:text-lg md:text-xl font-semibold mb-2">{title}</p>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{description}</p>
                    </div>
                    {/* <img src={image} alt="" className="h-32 w-full sm:h-45 sm:w-90 rounded-lg object-cover" /> */}
                    <div className="h-32 w-full sm:h-36 sm:w-72 md:h-45 md:w-90 sm:min-w-72 md:min-w-90 rounded-lg bg-black/10 flex items-center justify-center order-1 sm:order-none"></div>
                </div>
            )
    }
}