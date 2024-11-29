import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pizzeria/",
  server: {
    host: true,  // This makes Vite listen on all available network interfaces
    port: 3000,  // You can specify any port here
  },
})
