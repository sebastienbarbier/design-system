// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import scss from 'rollup-plugin-scss';

export default defineConfig(({ mode }) => {
  const isLibraryBuild = process.env.BUILD_STORYBOOK !== 'true'; // Check the environment variable
  return{
    build: {
      target: "modules",
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: [
          resolve(__dirname, "src/index.ts"),
          resolve(__dirname, "src/style.scss"),
          resolve(__dirname, "src/baseline.scss"),
        ],
        formats: ["es"],
        name: "@sebastienbarbier/design-system",
        // the proper extensions will be added
        fileName: "[name]",
      },
      cssCodeSplit: true,
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: [""],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            // vue: 'Vue',
          },
        },
      },
    },
    optimizeDeps: {},
    plugins: [
      // viteStaticCopy({
      //   targets: [
      //     {
      //       src: "LICENSE",
      //       dest: "",
      //     },
      //   ],
      // }),
      isLibraryBuild && dts({
        rollupTypes: true,
      }),
    ],
  };
});
