import {defineConfig} from 'vite';
import {djangoVitePlugin} from 'django-vite-plugin'
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        djangoVitePlugin({
            input: ['home/index.jsx', 'home/index.css']
        })
    ]
})