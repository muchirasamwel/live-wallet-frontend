export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BASE_URL: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
