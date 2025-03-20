import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 后端API地址
        changeOrigin: true, // 改变请求源，避免CORS问题
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写路径，去掉/api前缀
      },
      // 你可以添加更多的代理规则
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ 指向 src 目录
    },
  },
});
