import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
 safelist: [
    "bg-[#c6e9a7]",
    "bg-[#ccbed7]"
    
  ],
  plugins: [react(),tailwindcss()],
})
