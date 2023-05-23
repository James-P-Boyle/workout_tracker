import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import compressionPlugin from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compressionPlugin({
      algorithm: 'gzip',
      ext: '.gz', // Compressed files will have the .gz extension
      threshold: 10240, // Only compress files larger than 10KB
      deleteOriginFile: false, 
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
