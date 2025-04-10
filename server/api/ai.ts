import {
  createOllamaModel,
  // createOpenAIModel,
  generateChatResponse,
} from "../services/ai-service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const { id } = messages.length.toString();
  // const lastMessage = messages[messages.length - 1];

  // const openaiApiKey = useRuntimeConfig().openaiApiKey;
  // const openaiModel = createOpenAIModel(openaiApiKey);

  const ollamaModel = createOllamaModel();
  const response = await generateChatResponse(
    // openaiModel,
    ollamaModel,
    messages
  );
  return {
    id,
    role: "assistant",
    // content: `(server) You said: ${lastMessage.content}`,
    content: response,
  };
});
