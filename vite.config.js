import {defineConfig} from 'vite';
import {djangoVitePlugin} from 'django-vite-plugin'
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        djangoVitePlugin({
            input: ['home/index.jsx', 'home/index.css', 'home/fridge.jsx', 'home/fridge.css', 'home/cs50ai.jsx', 'home/cs50ai.css', 'home/portfolio.jsx', 'home/portfolio.css', 'home/cs50web.jsx', 'home/cs50web.css', 'home/diageohack.jsx', 'home/diageohack.css', 'home/android.jsx', 'home/android.css', 'home/suggestions.jsx', 'home/suggestions.css', 'home/xraydetection.jsx', 'home/xraydetection.css', 'home/playerposeclassifier.jsx', 'home/playerposeclassifier.css', 'home/humaned.jsx', 'home/humaned.css', 'home/drps.jsx', 'home/drps.css'],
        })
    ]
})