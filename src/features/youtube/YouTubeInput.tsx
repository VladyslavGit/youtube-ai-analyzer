import React, { useState } from 'react';
import { extractVideoId } from '@/shared/lib';

type YouTubeInputProps = {
  onSubmit: (videoId: string) => void;
};

export const YouTubeInput: React.FC<YouTubeInputProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = extractVideoId(url);
    if (videoId) {
      setError(null);
      onSubmit(videoId);
    } else {
      setError('Please enter a valid YouTube URL');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Paste a YouTube URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="px-4 py-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Fetch Subtitles
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};
