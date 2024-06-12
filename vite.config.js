// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    cssCodeSplit: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [
        resolve(__dirname, 'src/index.ts'),
      ],
      name: '@sebastienbarbier/design-system',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [''],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          // vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    dts(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/fonts.css',
          dest: ''
        }
      ]
    })
  ]
  // publicDir: 'assets',
})