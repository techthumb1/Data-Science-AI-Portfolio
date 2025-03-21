import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.OPENAI_API_KEY;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: message }],
                temperature: 0.7
            })
        });

        const data = await response.json();
        return NextResponse.json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
    }
}
