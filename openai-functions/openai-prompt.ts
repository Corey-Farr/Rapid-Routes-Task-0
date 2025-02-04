// import OpenAI from "openai";
// import TRANSCRIPTION from "./openai-transcribe";

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// });

// const RESPONSE = (await openai.chat.completions.create({
//     model: "gpt-4o-mini-2024-07-18",
//     messages: [
//         {role: "system", content: "You are a helpful assistant."},
//         {
//             role: "user",
//             content: "Respond to this transcription in 1 sentence:\n" + TRANSCRIPTION,
//         },
//     ],
//     store: false,
//     // Deterministic output settings:
//     seed: 42,
//     top_p: 0.00000000000001,
// })).choices[0].message.content;

const RESPONSE = "Superglue's remarkable strength and rapid setting properties stem from its unique chemical composition, which allows it to bond quickly and effectively to various surfaces, including skin, while also offering potential solutions for medical applications and environmental challenges.";

export default RESPONSE;