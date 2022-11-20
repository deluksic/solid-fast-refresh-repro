import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const headers = {
  // needed to use SharedArrayBuffer
  // between worker / main thread
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
}

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    headers,
  },
  build: {
    target: 'esnext',
  },
});
