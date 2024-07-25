import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssr: {
    noExternal: ['@vue-pdf-viewer/viewer', 'pdfjs-dist']
  },
})
