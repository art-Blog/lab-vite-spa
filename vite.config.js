import {resolve} from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname, "src")
const outputDir = resolve(__dirname, "dist")
export default defineConfig({
  root,
  plugins: [vue()],
  build:{
    outDir: outputDir,
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
