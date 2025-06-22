declare module 'youtube-caption-scraper' {
  export function getSubtitles(options: {
    videoID: string;
    lang: string;
  }): Promise<Array<{ text: string }>>;
}
