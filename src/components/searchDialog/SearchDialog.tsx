'use client';

import { useState, useMemo } from 'react';
import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Search } from "lucide-react"
import { Input } from "../ui/input"

interface SearchResult {
    id: string;
    name: string;
    category: 'candidatos' | 'partidos' | 'noticias';
    description?: string;
}

const mockData: SearchResult[] = [
    { id: '1', name: 'Leonardo Aguinaga', category: 'candidatos', description: 'Candidato a alcalde' },
    { id: '2', name: 'Leopoldo Martinez', category: 'candidatos', description: 'Candidato al congreso' },
    { id: '3', name: 'León García', category: 'candidatos', description: 'Candidato a gobernador' },
    { id: '4', name: 'Partido Morado', category: 'partidos', description: 'Partido político de centro' },
    { id: '5', name: 'Partido Liberal', category: 'partidos', description: 'Partido de derecha liberal' },
    { id: '6', name: 'León se escapa del zoológico', category: 'noticias', description: 'Noticia viral de la semana' },
    { id: '7', name: 'Leonardo DiCaprio visita Lima', category: 'noticias', description: 'Actor famoso en evento ambiental' },
    { id: '8', name: 'Nueva ley electoral aprobada', category: 'noticias', description: 'Cambios importantes en elecciones' },
];

export default function SearchDialog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const searchResults = useMemo(() => {
        if (!searchTerm.trim()) return [];

        return mockData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const groupedResults = useMemo(() => {
        const groups: Record<string, SearchResult[]> = {};

        searchResults.forEach(result => {
            if (!groups[result.category]) {
                groups[result.category] = [];
            }
            groups[result.category].push(result);
        });

        return groups;
    }, [searchResults]);

    const handleClose = () => {
        setIsOpen(false);
        setSearchTerm('');
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button className="flex items-center gap-x-2 text-sm font-medium">
                    <Search size={16} />
                    <p>Buscar</p>
                </button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-2xl h-[85vh] max-h-[600px] flex flex-col p-0" showCloseButton={false}>
                <DialogHeader className="shrink-0 ">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-semibold"></DialogTitle>
                    </div>
                </DialogHeader>

                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Search Input */}
                    <div className="shrink-0 px-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                            <Input
                                type="text"
                                className="pl-9 text-base border-gray-200 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0 focus:shadow-md"
                                placeholder="Buscar candidatos, partidos o noticias..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Search Results */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {searchTerm.trim() === '' ? (
                            <></>
                        ) : searchResults.length === 0 ? (
                            <div className="text-center text-gray-500 mt-8">
                                <p>No se encontraron resultados para "{searchTerm}"</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {Object.entries(groupedResults).map(([category, results]) => (
                                    <div key={category} className="space-y-3">
                                        <div className="border-b border-gray-200 pb-1">
                                            <h3 className="text-xs font-semibold text-gray-700 capitalize tracking-wide px-3">
                                                {category}
                                            </h3>
                                        </div>
                                        <div className="space-y-2.5">
                                            {results.map((result) => (
                                                <button
                                                    key={result.id}
                                                    className="w-full text-left rounded-lg hover:bg-gray-50 transition-colors group flex items-center gap-2 px-3"
                                                    onClick={() => {
                                                        console.log('Selected:', result);
                                                        handleClose();
                                                    }}
                                                >
                                                    { category === 'candidatos' && (
                                                        <div className='rounded-full bg-black size-7.5'></div>
                                                    )}
                                                    <div>
                                                        <div className="font-medium text-sm text-gray-900 group-hover:text-primary">
                                                            {result.name}
                                                        </div>
                                                        {result.description && (
                                                            <div className="text-xs text-gray-500">
                                                                {result.description}
                                                            </div>
                                                        )}
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
