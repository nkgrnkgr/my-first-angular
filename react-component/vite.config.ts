import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: { "process.env.NODE_ENV": '"production"' },
  build: {
    watch: {},
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "react-component-lib",
      fileName: "react-component-lib",
    },
    rollupOptions: {
      // external: ['react', 'react-dom'],
      // output: {
      //   globals: {
      //     react: 'React',
      //     'react-dom': 'ReactDOM',
      //   },
      // },
    },
  },
});
