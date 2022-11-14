/// <reference types="@astrojs/image/client" />
/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly PUBLIC_USER_NAME: string;
    readonly PUBLIC_PASSWORD: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }