'use client';

import { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import PresidentCard from "../presidentCard"
import { API_BASE_URL } from '@/config/api';

interface Candidate {
    id: number;
    fullName: string;
    office: string;
    photoUrl: string;
    voteIntentions: any[];
}

interface PoliticalGroup {
    id: number;
    name: string;
    shortName: string;
    logoUrl: string;
    candidates: Candidate[];
}

export default function PresidentCarousel() {
    const [activeCard, setActiveCard] = useState(0);
    const [politicalGroups, setPoliticalGroups] = useState<PoliticalGroup[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPoliticalGroups();
    }, []);

    const fetchPoliticalGroups = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`${API_BASE_URL}/political-groups`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            const result = await response.json();
            
            if (result.success && result.data) {
                // Filtrar solo los que tienen candidatos presidenciales
                const groupsWithPresidents = result.data.filter((group: PoliticalGroup) => 
                    group.candidates.some((c: Candidate) => c.office === 'PRESIDENT')
                );
                setPoliticalGroups(groupsWithPresidents);
            }
        } catch (error) {
            console.error('Error fetching political groups:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Cargando candidatos...</div>;
    }

    // Calcular el total de votos de todos los candidatos
    const totalVotes = politicalGroups.reduce((acc, group) => {
        const president = group.candidates.find(c => c.office === 'PRESIDENT');
        return acc + (president?.voteIntentions?.length || 0);
    }, 0);

    return (
        <Carousel
            opts={{
                align: "start",
                slidesToScroll: 4,
            }}
            className="w-full max-w-7xl"
        >
            <CarouselContent className="ml-0 overflow-visible">
                {politicalGroups.map((group, index) => {
                    const president = group.candidates.find(c => c.office === 'PRESIDENT');
                    if (!president) return null;
                    
                    return (
                        <CarouselItem key={group.id} className="md:basis-1/2 lg:basis-1/4 pl-0">
                            <div
                                className={`transition-all duration-300 cursor-pointer ${
                                    activeCard === index 
                                        ? 'opacity-100 grayscale-0' 
                                        : 'opacity-90 grayscale hover:opacity-100 hover:grayscale-0'
                                }`}
                                onMouseEnter={() => setActiveCard(index)}
                            >
                                <PresidentCard 
                                    id={group.id}
                                    name={president.fullName}
                                    politicalParty={group.name}
                                    politicalPartyShort={group.shortName}
                                    image={president.photoUrl}
                                    voteCount={president.voteIntentions?.length || 0}
                                    totalVotes={totalVotes}
                                />
                            </div>
                        </CarouselItem>
                    );
                })}  
            </CarouselContent>
            <CarouselPrevious className="-top-6 left-290" />
            <CarouselNext className="-top-6 right-2" />
        </Carousel>
    )
}
