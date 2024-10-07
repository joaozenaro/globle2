import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    proxy: {
      '/.netlify': 'http://localhost:9999/.netlify'
    }
  },
  build: {
    outDir: "../dist",
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react()]
})
