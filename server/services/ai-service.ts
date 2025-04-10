import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createOllama } from "ollama-ai-provider";
import type { Message, LanguageModelV1 } from "ai";

export const createOllamaModel = () => {
  const ollama = createOllama();
  return ollama("llama3.1");
};

export const createOpenAIModel = (apiKey: string) => {
  const openai = createOpenAI({
    apiKey,
    // apiHost: "https://api.openai.com/v1",
  });
  return openai("gpt-4o-mini");
};

export async function generateChatResponse(
  model: LanguageModelV1,
  messages: Message[]
  // apiKey: string
): Promise<string> {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Invalid messages array");
  }
  const response = await generateText({
    model,
    messages,
  });
  return response.text.trim();
}
