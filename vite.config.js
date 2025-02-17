import eslintPlugin from "@nabla/vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    eslintPlugin(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
