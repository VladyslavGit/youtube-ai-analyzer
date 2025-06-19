import { useState } from 'react';
import { callLlm } from './llmClient';
import { buildSummaryPrompt } from './generatePrompt';

type Options = {
  model?: string;
};

export const useSummarize = () => {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const summarize = async (transcript: string, options?: Options) => {
    setLoading(true);
    setError(null);
    setSummary(null);

    try {
      const prompt = buildSummaryPrompt(transcript);
      const response = await callLlm({
        model: options?.model || 'mistral',
        prompt,
      });
      setSummary(response.trim());
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { summary, loading, error, summarize };
};
