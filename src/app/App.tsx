import { useState } from 'react';
import { YouTubeInput } from '../features/youtube/YouTubeInput';
import { SubtitleFetcher } from '../features/subtitles/SubtitleFetcher';

export const App = () => {
  const [videoId, setVideoId] = useState<string | null>(null);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">YouTube AI Analyzer</h1>
      <YouTubeInput onSubmit={setVideoId} />
      {videoId && <SubtitleFetcher videoId={videoId} />}
    </main>
  );
};
