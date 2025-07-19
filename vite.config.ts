import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://github.com/ragnarsson03/TaskFlow?tab=readme-ov-file#react--typescript--vite',  // <-- reemplaza "tu-repo" con el nombre exacto de tu repo
  plugins: [react()],
});
