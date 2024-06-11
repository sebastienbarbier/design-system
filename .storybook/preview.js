/** @type { import('@storybook/html').Preview } */

const preview = {
  parameters: {
    options: {
      storySort: {
        method: '',
        order: ['Overview', 'Design System', ['How to use', 'Colors', 'Typefaces'], 'About this library', ['Change log', 'License']],
        locales: '',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
