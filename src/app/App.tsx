import { useState } from 'react';
import { YouTubeInput } from '../features/youtube/YouTubeInput';
import { SubtitleFetcher } from '../features/subtitles/SubtitleFetcher';
import { SummaryViewer } from '../features/llm/SummaryViewer';
import { useSummarize } from '../features/llm/useSummarize';

export const App = () => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);

  const {
    summary,
    loading: summarizing,
    error: summaryError,
    generateSummary,
  } = useSummarize();

  const handleTranscript = (text: string | null) => {
    setTranscript(text);
    if (text) generateSummary(text);
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">YouTube AI Analyzer</h1>

      <YouTubeInput onSubmit={setVideoId} />

      {videoId && (
        <SubtitleFetcher videoId={videoId} onTranscript={handleTranscript} />
      )}

      {transcript && (
        <SummaryViewer
          summary={summary}
          loading={summarizing}
          error={summaryError}
        />
      )}
    </main>
  );
};
