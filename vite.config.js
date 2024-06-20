import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
const aliases = {
  '/@/': path.resolve(__dirname, 'src') // Replace 'src' with your actual source directory
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases
  }
})
