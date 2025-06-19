import { OLLAMA_URL } from '../../config/ollama';

export type LlmRequest = {
  model: string;
  prompt: string;
  stream?: boolean;
};

export type LlmResponse = {
  response: string;
};

export async function callLlm({
  model,
  prompt,
  stream = false,
}: LlmRequest): Promise<string> {
  const res = await fetch(OLLAMA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, prompt, stream }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`LLM error: ${res.status} ${errorText}`);
  }

  const data: LlmResponse = await res.json();
  return data.response;
}
