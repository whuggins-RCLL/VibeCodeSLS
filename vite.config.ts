import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase the warning limit to 2000kB to accommodate large text content in tutorials
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Separate node_modules into a separate vendor chunk for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});