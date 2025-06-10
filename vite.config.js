import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    allowedHosts:  [
      '9054-180-251-237-216.ngrok-free.app', // ganti sesuai dengan URL ngrok Anda
    ],
  },
  build: {
    outDir: "dist",
  },
});
