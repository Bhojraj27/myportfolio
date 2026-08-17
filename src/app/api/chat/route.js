import { NextResponse } from 'next/server';
import { buildChatSystemPrompt } from '@/lib/chat-context';
import { personalInfo } from '@/data/portfolio';

export async function POST(request) {
  try {
    const { message, history = [] } = await request.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Chat is not configured yet. Please contact me at ' + personalInfo.email },
        { status: 503 },
      );
    }

    const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
    const systemPrompt = buildChatSystemPrompt();

    const contents = [
      ...history.slice(-6).map((h) => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.content }],
      })),
      { role: 'user', parts: [{ text: message }] },
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
          },
        }),
      },
    );

    if (!response.ok) {
      const err = await response.text();
      console.error('Gemini API error:', err);
      return NextResponse.json({ error: 'AI service unavailable. Try again later.' }, { status: 502 });
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text
      || "I couldn't generate a response. Please email Bhojraj at " + personalInfo.email;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
