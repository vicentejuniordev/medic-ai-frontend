import { useEffect, useState } from 'react';
import { sendMessage, type Conversation } from './service';
const key = 'medic-ai:conversations:v1';
function load(): Conversation[] {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(key) ?? '[]');
    if (!Array.isArray(data)) return [];
    return data.filter((item): item is Conversation => item && typeof item.id === 'string' && typeof item.title === 'string' && Array.isArray(item.messages) && item.messages.every((m: Record<string, unknown>) => m && typeof m.id === 'string' && ['user', 'assistant'].includes(String(m.role)) && typeof m.content === 'string' && (m.source === undefined || typeof m.source === 'string')));
  } catch { return []; }
}
export function useChat() {
  const [conversations, setConversations] = useState<Conversation[]>(load);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [storageError, setStorageError] = useState(false);
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(conversations)); setStorageError(false); } catch { setStorageError(true); } }, [conversations]);
  async function send(question: string) {
    if (!question.trim() || busy) return;
    const id = activeId ?? crypto.randomUUID();
    const message = { id: crypto.randomUUID(), role: 'user' as const, content: question.trim() };
    setActiveId(id); setBusy(true);
    setConversations(previous => previous.some(c => c.id === id) ? previous.map(c => c.id === id ? { ...c, messages: [...c.messages, message] } : c) : [{ id, title: question.trim().slice(0, 55), messages: [message] }, ...previous]);
    try {
      const answer = await sendMessage(question);
      setConversations(previous => previous.map(c => c.id === id ? { ...c, messages: [...c.messages, { id: crypto.randomUUID(), role: 'assistant', ...answer }] } : c));
    } finally { setBusy(false); }
  }
  return { conversations, activeId, select: setActiveId, messages: conversations.find(c => c.id === activeId)?.messages ?? [], busy, send, storageError, clear: () => { setConversations([]); setActiveId(null); } };
}
