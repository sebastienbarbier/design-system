/** @type { import('@storybook/html').Preview } */

const preview = {
  parameters: {
    options: {
      storySort: {
        method: "",
        order: [
          "Overview",
          "Design System",
          ["How to use", "Colors", "Typefaces"],
          "Components",
          "About this library",
          ["Change log", "License"],
        ],
        locales: "",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs", "autodocs"],
};

export default preview;
