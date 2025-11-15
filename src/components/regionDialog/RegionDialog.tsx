'use client';

import { useState, useMemo } from 'react';
import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MapPinnedIcon, Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

// Todas las regiones del Perú
const regions = [
    'Amazonas',
    'Áncash',
    'Apurímac',
    'Arequipa',
    'Ayacucho',
    'Cajamarca',
    'Callao',
    'Cusco',
    'Huancavelica',
    'Huánuco',
    'Ica',
    'Junín',
    'La Libertad',
    'Lambayeque',
    'Lima',
    'Loreto',
    'Madre de Dios',
    'Moquegua',
    'Pasco',
    'Piura',
    'Puno',
    'San Martín',
    'Tacna',
    'Tumbes',
    'Ucayali'
];

export default function RegionDialog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    // Memoized search results
    const filteredRegions = useMemo(() => {
        if (!searchTerm.trim()) return regions;
        
        return regions.filter(region =>
            region.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    // Group regions by first letter
    const groupedRegions = useMemo(() => {
        const groups: Record<string, string[]> = {};
        
        filteredRegions.forEach(region => {
            const firstLetter = region.charAt(0).toUpperCase();
            if (!groups[firstLetter]) {
                groups[firstLetter] = [];
            }
            groups[firstLetter].push(region);
        });
        
        // Sort groups alphabetically
        const sortedGroups: Record<string, string[]> = {};
        Object.keys(groups).sort().forEach(letter => {
            sortedGroups[letter] = groups[letter].sort();
        });
        
        return sortedGroups;
    }, [filteredRegions]);

    const handleRegionSelect = (region: string) => {
        setSelectedRegion(region);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClose = () => {
        setIsOpen(false);
        setSearchTerm('');
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>
                    <span className="hidden md:block">
                        {selectedRegion || 'Seleccionar tu región'}
                    </span>
                    <MapPinnedIcon className="block md:hidden" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-md h-[85vh] max-h-[500px] flex flex-col p-0" showCloseButton={false}>
                <DialogHeader className="shrink-0">
                    <DialogTitle className="text-lg font-semibold px-4"></DialogTitle>
                </DialogHeader>
                
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Search Input */}
                    <div className="shrink-0 px-3 pb-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                            <Input
                                type="text"
                                className="pl-9 text-base border-gray-200 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0"
                                placeholder="Buscar tu región..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Regions List */}
                    <div className="flex-1 overflow-y-auto px-4">
                        {filteredRegions.length === 0 ? (
                            <div className="text-center text-gray-500 mt-8">
                                <p>No se encontraron regiones para "{searchTerm}"</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {Object.entries(groupedRegions).map(([letter, regions]) => (
                                    <div key={letter} className="space-y-3">
                                        <div className="border-b border-gray-200 pb-1 px-3">
                                            <h3 className="text-base font-bold text-gray-800">
                                                {letter}
                                            </h3>
                                        </div>
                                        <div className="space-y-2">
                                            {regions.map((region) => (
                                                <button
                                                    key={region}
                                                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                                    onClick={() => handleRegionSelect(region)}
                                                >
                                                    <div className="font-medium text-gray-900 group-hover:text-primary">
                                                        {region}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}