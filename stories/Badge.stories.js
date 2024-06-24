import '@sebastienbarbier/design-system/components/badge/badge';

/**
 * The badge component can be used to display a list of key words or tags.
 * 
 * ## How to use
 * 
 * Register the `<sb-badge>` web component using following import
 * 
 * ```js
 * import '@sebastienbarbier/design-system/badge';
 * ```
 * 
 * Then simply use the `<sb-badge> ... </sb-badge>` tag to display a badge within your html
 *
 */
export default {
  title: 'Components/Badge',
  tags: [],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
      <sb-badge>${label}</sb-badge>
    `;
  },
  argTypes: {
    label: { control: 'text' },
  },
};

/**
 * Basic use of the badge component
 */
export const Simple = {
  name: 'Basic use',
  args: {
    label: 'This is a badge',
  },
};

/**
 * You need to use the `<sb-badge>` tag to display a badge within your html
 */
export const List = {
  name: 'List of badges',
  args: {
    label: 'This is a badge',
  },
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
<sb-badge>HTML</sb-badge>
<sb-badge>CSS</sb-badge>
<sb-badge>Javascript</sb-badge>
    `;
  },
};
