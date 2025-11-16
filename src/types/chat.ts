// types/chat.ts
export type ChatRole = 'user' | 'assistant' | 'system';

export interface Chat {
  id: string;
  initialQuestion: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string | number;
  chatId: string;
  role: ChatRole;
  content: string;
  createdAt: string;
}

// Para los documentos de contexto
export interface Document {
  id: number;
  title: string;
  slug?: string | null;
  tags?: string[] | null;
  content: string;
  createdAt: string;
}