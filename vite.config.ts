/** @format */

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPath from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPath()],
  server: {
    port: 4200,
    host: "localhost",
    allowedHosts: ["55c4-1-55-216-4.ngrok-free.app"],
  },
});
