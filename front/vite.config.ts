import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirige todas las solicitudes al backend
      '/api': {
        target: 'http://localhost:3000/', // URL de tu backend
        changeOrigin: true, // Cambia el origen de la solicitud al del backend
        secure: false, // Si usas HTTPS con un certificado autofirmado
        rewrite: (path) => path.replace(/^\/api/, ''), // Si necesitas modificar el path
      },
    },
  },
});
