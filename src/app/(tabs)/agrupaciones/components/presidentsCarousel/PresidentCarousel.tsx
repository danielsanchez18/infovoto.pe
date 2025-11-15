'use client';

import { useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import PresidentCard from "../presidentCard"

export default function PresidentCarousel() {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <Carousel
            opts={{
                align: "start",
                slidesToScroll: 4,
            }}
            className="w-full max-w-7xl"
        >
            <CarouselContent className="ml-0 overflow-visible">
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-0">
                        <div
                            className={`transition-all duration-300 cursor-pointer ${
                                activeCard === index 
                                    ? 'opacity-100 grayscale-0' 
                                    : 'opacity-90 grayscale hover:opacity-100 hover:grayscale-0'
                            }`}
                            onMouseEnter={() => setActiveCard(index)}
                        >
                            <PresidentCard />
                        </div>
                    </CarouselItem>
                ))}  
            </CarouselContent>
            <CarouselPrevious className="-top-6 left-290" />
            <CarouselNext className="-top-6 right-2" />
        </Carousel>
    )
}
