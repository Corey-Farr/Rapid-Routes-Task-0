import dotenv from "dotenv"
import TRANSCRIPTION from "./openai-functions/openai-transcribe";
import RESPONSE from "./openai-functions/openai-prompt";

dotenv.config();


// FOR DEMONSTRATION. DELETE AFTER
console.log(`FOR DEMONSTRATION. DELETE AFTER\nTranscription:\n${TRANSCRIPTION}\nFOR DEMONSTRATION. DELETE AFTER\n\n`);
// FOR DEMONSTRATION. DELETE AFTER


// Log AI's response
console.log(`Response:\n${RESPONSE}`);