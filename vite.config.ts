import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '/king-charles-spaniel/', // 👈 сюда то же имя, что и в homepage
})
