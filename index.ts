import dotenv from "dotenv"
import RESPONSE from "./openai-functions/openai-prompt";

dotenv.config();

// Log AI's response
console.log(`Response:\n${RESPONSE}`);