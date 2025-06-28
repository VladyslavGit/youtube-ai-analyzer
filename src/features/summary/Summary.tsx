type Props = {
  summary: string | null;
  loading: boolean;
  error: string | null;
};

export const Summary: React.FC<Props> = ({ summary, loading, error }) => {
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
