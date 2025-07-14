import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpeg', '**/*.JPEG','**/*.jpg', '**/*.JPG', '**/*.png','**/*.PNG','**/*.webp','**/*WEBP']
  })