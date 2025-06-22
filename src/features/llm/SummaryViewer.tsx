import React, { useEffect } from 'react';
import { useSummarize } from './useSummarize';

type Props = {
  summary: string | null;
  error: string | null;
  loading: boolean;
};

export const SummaryViewer: React.FC<Props> = ({ summary, error, loading }) => {
  if (loading) return <p className="text-sm text-gray-500">Summarizing...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!summary) return null;

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Summary</h2>
      <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
        {summary}
      </p>
    </div>
  );
};
