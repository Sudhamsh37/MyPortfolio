import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MyPortfolio/', // Replace 'MyPortfolio' with your repository name
  plugins: [react()],
});

