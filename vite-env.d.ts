/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOST_URL: string;
  readonly VITE_API_PREFIX: string;
  readonly VITE_API_VERSION: string;

  readonly VITE_AUTH_MODULE_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
