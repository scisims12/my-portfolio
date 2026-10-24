import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        portfolio: fileURLToPath(new URL('./index.html', import.meta.url)),
        mixify: fileURLToPath(new URL('./mixify.html', import.meta.url)),
        childrenChoice: fileURLToPath(new URL('./children-choice-books.html', import.meta.url)),
      },
    },
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
