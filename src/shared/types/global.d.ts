// Global types here

interface ImportMetaEnv {
  VITE_OLLAMA_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
