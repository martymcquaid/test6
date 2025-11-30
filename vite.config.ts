import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/928f154e-1632-4573-8c13-3a0d2fad5269/preview/',
  plugins: [react()],
  server: {
    port: 5142,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5142,
    },
  },
})
