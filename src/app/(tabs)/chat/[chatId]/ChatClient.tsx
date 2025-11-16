// app/chat/[chatId]/ChatClient.tsx
'use client';

import { useChat } from '@ai-sdk/react';
import type { UIMessage } from '@ai-sdk/react';
import { TextStreamChatTransport } from 'ai';
import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Puedes usar componentes de shadcn ui
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Send } from 'lucide-react';

interface ChatClientProps {
    chatId: string;
}

export function ChatClient({ chatId }: ChatClientProps) {
    const [input, setInput] = useState('');
    const [isLoadingHistory, setIsLoadingHistory] = useState(true);
    const router = useRouter();

    const {
        messages,
        sendMessage,
        status,
        error,
        setMessages,
    } = useChat({
        id: chatId,
        transport: new TextStreamChatTransport({
            api: `/api/chat/${chatId}`,
        }),
        onError: (error) => {
            console.error('❌ Error en chat:', error);
        },
    });

    // Cargar mensajes históricos SOLO UNA VEZ al montar el componente
    useEffect(() => {
        async function loadHistory() {
            try {
                console.log('📥 Cargando historial del chat:', chatId);
                
                const response = await fetch(`/api/chats/${chatId}/messages`);
                
                if (!response.ok) {
                    console.error('❌ Error cargando historial');
                    setIsLoadingHistory(false);
                    return;
                }
                
                const data = await response.json();
                const historicalMessages = data.messages || [];
                
                console.log('✅ Mensajes históricos cargados:', historicalMessages.length);
                
                // Solo cargar si hay mensajes históricos
                if (historicalMessages.length > 0) {
                    // Convertir mensajes de BD a formato UIMessage
                    const uiMessages: UIMessage[] = historicalMessages.map((msg: any) => ({
                        id: msg.id.toString(),
                        role: msg.role,
                        parts: [{ type: 'text' as const, text: msg.content }],
                    }));
                    
                    setMessages(uiMessages);
                    console.log('✅ Historial cargado en la UI');
                } else {
                    console.log('ℹ️ No hay mensajes históricos para este chat');
                }
            } catch (err) {
                console.error('❌ Error cargando historial:', err);
            } finally {
                setIsLoadingHistory(false);
            }
        }
        
        loadHistory();
    }, [chatId, setMessages]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        try {
            console.log('📤 Enviando mensaje:', input);
            await sendMessage({
                parts: [{ type: 'text', text: input }],
            });
            setInput('');
            console.log('✅ Mensaje enviado correctamente');
        } catch (err) {
            console.error('❌ Error enviando mensaje:', err);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const isLoading = status === 'submitted';

    return (
        <div className="flex flex-col h-full max-h-screen">
            <div className='w-full pb-1 gap-2 flex items-center text-muted-foreground border-b px-3 font-medium text-base'>
                {/* <img src="/img/ciceron.png" className='w-8' alt="" /> */}
                <div className='size-5.5 rounded-full overflow-hidden grid grid-cols-3'>
                    <div className='h-full w-full bg-primary'></div>
                    <div className='h-full w-full bg-white'></div>
                    <div className='h-full w-full bg-primary'></div>
                </div>
                <p><strong className='text-lg text-black'>Cicerón,</strong> por un voto consciente</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 px-0 space-y-3 z-2 min-h-screen h-full pb-20">
                {isLoadingHistory && (
                    <p className="text-xs text-muted-foreground text-center">
                        Cargando historial del chat...
                    </p>
                )}
                
                {messages.map((m: UIMessage) => {
                    const textContent = m.parts
                        .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
                        .map(part => part.text)
                        .join('');

                    return (
                        <div
                            key={m.id}
                            className={
                                m.role === 'user'
                                    ? 'text-right'
                                    : 'text-left'
                            }
                        >
                            <div
                                className={[
                                    'inline-block rounded-lg px-3 py-2 text-sm',
                                    m.role === 'user'
                                        ? 'bg-muted'
                                        : '',
                                ].join(' ')}
                            >
                                {textContent}
                            </div>
                        </div>
                    );
                })}

                {isLoading && (
                    <div className='flex items-center gap-2'>
                        <p className='text-sm text-muted-foreground'>Analizando</p>
                        <Loader2 className='animate-spin size-4'/>
                    </div>
                )}

                {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                        <p className="text-sm text-red-600 font-medium">
                            ⚠️ Ocurrió un error al procesar tu consulta
                        </p>
                        <p className="text-xs text-red-500 mt-1">
                            {error.message || 'Por favor, intenta nuevamente.'}
                        </p>
                    </div>
                )}
            </div>

            <div className='fixed w-full bottom-10 max-w-[1255px] z-3'>
                <form
                    onSubmit={handleSubmit}
                    className="p-3 px-0 flex gap-2"
                >
                    <div className='w-full h-22 relative'>
                        <Input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Consulta acerca de las elecciones 2026 🇵🇪"
                            className='h-full pb-12 bg-white'
                        />
                        <Button type="submit" disabled={isLoading} className='rounded-full absolute right-3 bottom-3 size-8'>
                            <Send className='size-3' />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
