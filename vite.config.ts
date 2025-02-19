import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "./",  // باید مسیر پایه رو برای ریشه سایت تنظیم کنی
  build: {
    outDir: "dist",  // فایل‌ها به پوشه dist میرن
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html", // اگه صفحه‌های دیگه داری
        contact: "pricing.html",
      },
    },
  },
});