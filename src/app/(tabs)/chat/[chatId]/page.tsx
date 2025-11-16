// app/chat/[chatId]/page.tsx
import { ChatClient } from "./ChatClient";

export default async function ChatPage({ params }: { params: Promise<{ chatId: string }> }) {
  const { chatId } = await params;
  return <ChatClient chatId={chatId} />;
}
