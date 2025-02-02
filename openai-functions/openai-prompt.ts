import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function aiPrompt(prompt: string): Promise<string | null> {
    const result = await openai.chat.completions.create({
        model: "gpt-4o-mini-2024-07-18",
        messages: [
            {role: "system", content: "You are a helpful assistant."},
            {
                role: "user",
                content: prompt,
            },
        ],
        store: false,
        seed: 42,
        top_p: 0.00000000000001,
    });
    return result.choices[0].message.content;
}