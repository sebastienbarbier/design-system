import "@sebastienbarbier/design-system/components/title/title";

/**
 * The title component can be used to display a title.
 *
 * ## How to use
 *
 * Register the `<sb-title>` web component using following import
 *
 * ```js
 * import "@sebastienbarbier/design-system/title";
 * ```
 *
 * Then simply use the `<sb-title> ... </sb-title>` tag to display a title within your html
 *
 */
export default {
  title: "Components/Title",
  tags: [],
  render: ({ headline, title, variant, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
      <sb-title headline="${headline}" variant="${variant}">${title}</sb-title>
    `;
  },
  argTypes: {
    headline: { control: "text" },
    title: { control: "text" },
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

/**
 * Basic use of the badge component
 */
export const Simple = {
  name: "Basic use",
  args: {
    headline: "Headline",
    title: "This is a title",
  },
};

/**
 * You need to use the `<sb-title>` tag to display a title within your html
 */
export const List = {
  name: "List of Title",
  args: {
    headline: "Headline",
    title: "This is a title",
  },
  render: ({ headline, title, variant, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
<sb-title headline="${headline}" variant="h1">${title} h1</sb-title>
<sb-title headline="${headline}" variant="h2">${title} h2</sb-title>
<sb-title headline="${headline}" variant="h3">${title} h3</sb-title>
<sb-title headline="${headline}" variant="h4">${title} h4</sb-title>
<sb-title headline="${headline}" variant="h5">${title} h5</sb-title>
<sb-title headline="${headline}" variant="h6">${title} h6</sb-title>
    `;
  },
};
