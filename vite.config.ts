import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslintPlugin(), StylelintPlugin({ fix: true })],
    server: {
        host: 'localhost',
        port: 8080,
        open: false,
    },
});
