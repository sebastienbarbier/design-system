/** @type { import('@storybook/html-vite').StorybookConfig } */
import path from "path";

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  staticDirs: ['../assets'],

  async viteFinal(config) {
    config.optimizeDeps.exclude = [...(config.optimizeDeps?.exclude ?? []), 'lit', 'lit-html']
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sebastienbarbier/design-system': "../src",
    };
    return config;
  },

  docs: {
    autodocs: true,
  }
};
export default config;
