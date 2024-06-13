import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 서버 port 설정 추가
  server: {
    host: "localhost",
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
