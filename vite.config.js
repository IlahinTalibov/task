import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Svg Component
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
