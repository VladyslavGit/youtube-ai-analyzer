import { useState } from 'react';
import { getSubtitles } from 'youtube-caption-scraper';

export function useSubtitles() {
  const [transcript, setTranscript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSubtitles = async (videoId: string) => {
    setLoading(true);
    setError(null);
    setTranscript(null);

    try {
      const subtitles = await getSubtitles({ videoID: videoId, lang: 'en' });

      if (!Array.isArray(subtitles) || subtitles.length === 0) {
        setError('No subtitles found for this video.');
        return;
      }

      const fullTranscript = subtitles
        .map((caption) => caption.text.trim())
        .join(' ');

      setTranscript(fullTranscript);
    } catch (err) {
      console.error('[useSubtitles] fetch error:', err);
      setError('Failed to fetch subtitles.');
    } finally {
      setLoading(false);
    }
  };

  return {
    transcript,
    loading,
    error,
    fetchSubtitles,
  };
}
