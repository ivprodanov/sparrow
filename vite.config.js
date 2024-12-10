import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias for SCSS subfolder
      '@scss': path.resolve(__dirname, 'src/assets/styles/scss'),
    },
  },
})
