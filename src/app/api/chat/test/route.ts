// Test endpoint para diagnosticar problemas con Google AI
// Acceder en: http://localhost:3000/api/chat/test

import { google } from '@ai-sdk/google';
import { streamText, generateText } from 'ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const maxDuration = 30;

export async function GET() {
  const diagnostics: any = {
    timestamp: new Date().toISOString(),
    tests: [],
    environment: {},
  };

  // Test 1: Verificar variables de entorno
  diagnostics.tests.push({ name: 'Environment Variables', status: 'running' });
  
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  
  if (!apiKey) {
    diagnostics.tests[0].status = 'failed';
    diagnostics.tests[0].error = 'GOOGLE_GENERATIVE_AI_API_KEY no configurada';
    diagnostics.environment.apiKey = 'missing';
  } else {
    diagnostics.tests[0].status = 'passed';
    diagnostics.environment.apiKey = `${apiKey.substring(0, 10)}...`;
    diagnostics.environment.apiKeyLength = apiKey.length;
  }

  // Test 2: Probar conexión básica con Google AI
  diagnostics.tests.push({ name: 'Google AI Connection', status: 'running' });
  
  const modelsToTry = ['gemini-2.5-flash', 'gemini-2.5-pro-preview-03-25', 'gemini-2.5-flash-preview-05-20'];
  let workingModel = null;
  
  for (const modelName of modelsToTry) {
    try {
      const { text, usage } = await generateText({
        model: google(modelName),
        prompt: 'Di "OK"',
      });

      diagnostics.tests[1].status = 'passed';
      diagnostics.tests[1].response = text;
      diagnostics.tests[1].usage = usage;
      diagnostics.tests[1].workingModel = modelName;
      workingModel = modelName;
      break;
    } catch (error: any) {
      if (modelName === modelsToTry[modelsToTry.length - 1]) {
        // Si es el último modelo y falló, guardamos el error
        diagnostics.tests[1].status = 'failed';
        diagnostics.tests[1].error = error.message;
        diagnostics.tests[1].errorDetails = {
          name: error.name,
          cause: error.cause,
          stack: error.stack?.split('\n').slice(0, 3),
          triedModels: modelsToTry,
        };
      }
    }
  }

  // Test 3: Probar streaming
  diagnostics.tests.push({ name: 'Streaming Test', status: 'running' });
  
  if (workingModel) {
    try {
      const result = streamText({
        model: google(workingModel),
        prompt: 'Cuenta del 1 al 3',
      });

      let streamedText = '';
      for await (const chunk of result.textStream) {
        streamedText += chunk;
      }

      diagnostics.tests[2].status = 'passed';
      diagnostics.tests[2].streamedText = streamedText;
      diagnostics.tests[2].usedModel = workingModel;
    } catch (error: any) {
      diagnostics.tests[2].status = 'failed';
      diagnostics.tests[2].error = error.message;
    }
  } else {
    diagnostics.tests[2].status = 'skipped';
    diagnostics.tests[2].reason = 'No working model found';
  }

  // Test 4: Probar con system prompt
  diagnostics.tests.push({ name: 'System Prompt Test', status: 'running' });
  
  if (workingModel) {
    try {
      const { text } = await generateText({
        model: google(workingModel),
        system: 'Eres un asistente de elecciones peruanas 2026',
        messages: [
          { role: 'user', content: '¿De qué país hablas?' },
        ],
      });

      diagnostics.tests[3].status = 'passed';
      diagnostics.tests[3].response = text;
      diagnostics.tests[3].usedModel = workingModel;
    } catch (error: any) {
      diagnostics.tests[3].status = 'failed';
      diagnostics.tests[3].error = error.message;
    }
  } else {
    diagnostics.tests[3].status = 'skipped';
    diagnostics.tests[3].reason = 'No working model found';
  }

  // Test 5: Probar convertToCoreMessages (simular flujo real)
  diagnostics.tests.push({ name: 'UIMessage to CoreMessage Conversion', status: 'running' });
  
  if (workingModel) {
    try {
      const mockUIMessages = [
        {
          id: '1',
          role: 'user' as const,
          parts: [{ type: 'text' as const, text: 'Hola' }]
        }
      ];

      // Simular extracción
      const userQuestion = mockUIMessages[0].parts
        .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
        .map(part => part.text)
        .join('');

      const coreMessages = mockUIMessages.map(m => ({
        role: m.role,
        content: m.parts.filter(p => p.type === 'text').map(p => p.text).join('')
      }));

      const { text } = await generateText({
        model: google(workingModel),
        messages: coreMessages,
      });

      diagnostics.tests[4].status = 'passed';
      diagnostics.tests[4].extractedQuestion = userQuestion;
      diagnostics.tests[4].coreMessages = coreMessages;
      diagnostics.tests[4].response = text;
      diagnostics.tests[4].usedModel = workingModel;
    } catch (error: any) {
      diagnostics.tests[4].status = 'failed';
      diagnostics.tests[4].error = error.message;
      diagnostics.tests[4].errorDetails = error.cause;
    }
  } else {
    diagnostics.tests[4].status = 'skipped';
    diagnostics.tests[4].reason = 'No working model found';
  }

  // Resumen
  const passed = diagnostics.tests.filter((t: any) => t.status === 'passed').length;
  const failed = diagnostics.tests.filter((t: any) => t.status === 'failed').length;

  diagnostics.summary = {
    total: diagnostics.tests.length,
    passed,
    failed,
    allPassed: failed === 0,
  };

  return NextResponse.json(diagnostics, {
    status: diagnostics.summary.allPassed ? 200 : 500,
  });
}

// POST endpoint para probar con datos reales
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, testStreaming = false } = body;

    console.log('🧪 Test POST endpoint recibido');
    console.log('Messages:', JSON.stringify(messages, null, 2));

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Se requiere un array de messages' },
        { status: 400 }
      );
    }

    // Extraer último mensaje del usuario
    const lastUserMessage = [...messages]
      .reverse()
      .find((m: any) => m.role === 'user');

    if (!lastUserMessage) {
      return NextResponse.json(
        { error: 'No se encontró mensaje del usuario' },
        { status: 400 }
      );
    }

    const userQuestion = lastUserMessage.parts
      .filter((part: any) => part.type === 'text')
      .map((part: any) => part.text)
      .join('');

    console.log('📝 Pregunta extraída:', userQuestion);

    // Convertir a core messages
    const coreMessages = messages.map((m: any) => ({
      role: m.role,
      content: m.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('')
    }));

    console.log('🔄 Core messages:', JSON.stringify(coreMessages, null, 2));

    const modelToUse = 'gemini-2.5-flash'; // Modelo que funciona

    if (testStreaming) {
      console.log('🌊 Iniciando streaming...');
      
      const result = streamText({
        model: google(modelToUse),
        system: 'Eres un asistente de elecciones peruanas 2026',
        messages: coreMessages,
      });

      return result.toTextStreamResponse();
    } else {
      console.log('📤 Generando respuesta...');
      
      const { text, usage, finishReason } = await generateText({
        model: google(modelToUse),
        system: 'Eres un asistente de elecciones peruanas 2026',
        messages: coreMessages,
      });

      console.log('✅ Respuesta generada');
      console.log('Usage:', usage);
      console.log('Finish reason:', finishReason);

      return NextResponse.json({
        success: true,
        modelUsed: modelToUse,
        userQuestion,
        coreMessages,
        response: text,
        usage,
        finishReason,
      });
    }
  } catch (error: any) {
    console.error('❌ Error en test POST:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        errorName: error.name,
        errorCause: error.cause,
        stack: error.stack?.split('\n').slice(0, 5),
      },
      { status: 500 }
    );
  }
}
