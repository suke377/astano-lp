import { defineConfig } from 'vite';
// /repository-name/ for project Pages; / for a user site or custom domain.
export default defineConfig({base:process.env.VITE_BASE_PATH || './',build:{rollupOptions:{input:{main:'index.html',commerce:'commerce.html',privacy:'privacy.html',terms:'terms.html'}}}});
