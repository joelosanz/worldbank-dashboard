import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/worldbank-dashboard/',
  test: {
    environment: "jsdom",
    globals: true
  }
})
