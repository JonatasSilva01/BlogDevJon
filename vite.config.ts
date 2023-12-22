import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import * as path from 'path';

export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //     '@styles': path.resolve(__dirname, './src/styles'),
  //     '@services': path.resolve(__dirname, './src/services'),
  //   }
  // },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    //host: 'localhost',
    port: 3030,
  }
})
