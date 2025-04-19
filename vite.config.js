import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          // 保持中文文件名不被编码
          if (assetInfo.name.endsWith('.png')) {
            return `assets/${assetInfo.name}`;
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  },
  optimizeDeps: {
    include: ['data.js']
  }
}) 