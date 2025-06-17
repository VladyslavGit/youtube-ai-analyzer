import { useState } from 'react';

export const useSubtitles = () => {
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchSubtitles = async (videoId: string) => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Replace with real API later
      const mockTranscript = `This is a mock subtitle for video ${videoId}. Replace this with real data.`;
      await new Promise((res) => setTimeout(res, 1000)); // simulate latency
      setTranscript(mockTranscript);
    } catch (e) {
      setError('Failed to fetch subtitles.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, transcript, error, fetchSubtitles };
};
