'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function TestPage() {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [testMessage, setTestMessage] = useState('¿Quiénes son los candidatos presidenciales de Perú 2026?');

  const runDiagnostics = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/chat/test');
      const data = await res.json();
      setResults(data);
    } catch (error: any) {
      setResults({ error: error.message });
    }
    setLoading(false);
  };

  const testRealMessage = async () => {
    setLoading(true);
    try {
      const messages = [
        {
          id: '1',
          role: 'user',
          parts: [{ type: 'text', text: testMessage }]
        }
      ];

      const res = await fetch('/api/chat/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, testStreaming: false }),
      });

      const data = await res.json();
      setResults(data);
    } catch (error: any) {
      setResults({ error: error.message });
    }
    setLoading(false);
  };

  const testStreaming = async () => {
    setLoading(true);
    setResults({ streaming: 'Iniciando...' });
    
    try {
      const messages = [
        {
          id: '1',
          role: 'user',
          parts: [{ type: 'text', text: testMessage }]
        }
      ];

      const res = await fetch('/api/chat/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, testStreaming: true }),
      });

      if (!res.body) {
        throw new Error('No response body');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        fullText += chunk;
        setResults({ streaming: fullText });
      }

      setResults({ streaming: 'Completado', fullText });
    } catch (error: any) {
      setResults({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">🔍 Diagnóstico Google AI</h1>
      
      <div className="space-y-4 mb-8">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">📋 Tests Disponibles</h2>
          <div className="space-y-2">
            <Button 
              onClick={runDiagnostics} 
              disabled={loading}
              className="w-full"
            >
              1. Ejecutar Diagnóstico Completo (GET)
            </Button>
            
            <div className="space-y-2">
              <input
                type="text"
                value={testMessage}
                onChange={(e) => setTestMessage(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Mensaje de prueba"
              />
              <Button 
                onClick={testRealMessage} 
                disabled={loading}
                className="w-full"
                variant="secondary"
              >
                2. Test con Mensaje Real (POST sin streaming)
              </Button>
              
              <Button 
                onClick={testStreaming} 
                disabled={loading}
                className="w-full"
                variant="outline"
              >
                3. Test con Streaming (POST con streaming)
              </Button>
            </div>
          </div>
        </div>

        {loading && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm">⏳ Ejecutando test...</p>
          </div>
        )}

        {results && (
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">📊 Resultados:</h3>
            <pre className="text-xs overflow-auto max-h-96 bg-white p-3 rounded border">
              {JSON.stringify(results, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="font-semibold mb-2">✅ Qué hacer si los tests fallan:</h3>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>Verifica que GOOGLE_GENERATIVE_AI_API_KEY está en .env o .env.local</li>
          <li>Reinicia el servidor: npm run dev</li>
          <li>Verifica los logs en la consola del servidor</li>
          <li>Revisa el panel de Google AI Studio para errores de API</li>
          <li>Verifica que tu API key tiene permisos y cuota disponible</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h3 className="font-semibold mb-2">🔗 Enlaces útiles:</h3>
        <ul className="text-sm space-y-1">
          <li>
            <a 
              href="https://aistudio.google.com/app/apikey" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              → Obtener API Key de Google AI
            </a>
          </li>
          <li>
            <a 
              href="https://aistudio.google.com/app/prompts" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              → Panel de Google AI Studio
            </a>
          </li>
          <li>
            <a 
              href="/api/chat/test" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              → Endpoint de diagnóstico (JSON directo)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
