export function buildSummaryPrompt(transcript: string): string {
  return `
  You are a world-class content summarization agent, optimized for clarity, context preservation, and readability. 
  Your task is to generate a clear, concise summary of the following YouTube transcript. Focus on key ideas, logical flow, and eliminating filler. Preserve the structure of the speaker’s argument where possible. Avoid filler and repetition.
  Return only the final summary. Do not include titles, timestamps, or meta-commentary.
  
  ---
  
  Transcript:
  ${transcript}
  `.trim();
}
