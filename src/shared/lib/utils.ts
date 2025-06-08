export const truncate = (text: string, maxLength: number) =>
  text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

export const extractVideoId = (url: string): string | null => {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11})(?:&|$)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
