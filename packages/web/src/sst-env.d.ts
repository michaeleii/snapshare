/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_KINDE_AUDIENCE: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}