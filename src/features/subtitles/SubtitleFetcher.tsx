import React, { useEffect } from 'react';
import { useSubtitles } from './useSubtitles';

type Props = {
  videoId: string;
  onTranscript: (transcript: string | null) => void;
};

export const SubtitleFetcher: React.FC<Props> = ({ videoId, onTranscript }) => {
  const { loading, transcript, error, fetchSubtitles } = useSubtitles();

  useEffect(() => {
    fetchSubtitles(videoId);
  }, [videoId]);

  useEffect(() => {
    if (transcript) {
      onTranscript(transcript);
    }
  }, [transcript]);

  if (loading)
    return <p className="text-sm text-gray-500">Loading subtitles...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!transcript) return null;

  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <h2 className="font-semibold mb-2">Transcript</h2>
      <p className="whitespace-pre-wrap text-sm text-gray-800">{transcript}</p>
    </div>
  );
};
