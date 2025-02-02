import dotenv from "dotenv"
import aiTranscribe from "./openai-functions/openai-transcribe";
import aiPrompt from "./openai-functions/openai-prompt";

dotenv.config();
const PATH = "C:/Users/Main/Downloads/Transcribe.mp3"
// const transcription = await aiTranscribe(PATH);
const transcription = "Here are two metal cylinders, and a single drop of superglue. Once it sets, you can literally hang from that one drop of adhesive. Oh my god! That is crazy! So how is superglue so strong? That's what I want to find out. And along the way, we're going to learn how it sets so quickly, why it's so good at sticking to skin, how it saves lives, and how it might even help solve our plastic pollution problem."
const PROMPT = "Summarize this video in 1 sentence:\n" + transcription;
// const promptResult = await aiPrompt(PROMPT);
const promptResult = "The video explores the incredible strength of superglue, explaining its quick-setting properties, effectiveness on skin, life-saving applications, and potential role in addressing plastic pollution."
console.log(`
    Transcription:\n${transcription}\n
    Prompt Result:\n${promptResult}`
);