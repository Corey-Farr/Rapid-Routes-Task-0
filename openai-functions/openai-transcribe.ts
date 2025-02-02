import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function aiTranscribe(path: string): Promise<string> {
    const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(path),
        model: "whisper-1",
      });
      return transcription.text;
}