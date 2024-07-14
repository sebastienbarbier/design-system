import "@sebastienbarbier/design-system/baseline.scss";

/**
 * The title component can be used to display a list of key words or tags.
 *
 * ## How to use
 *
 * Titles are displayed using the `h1, h2, h3, h4, h5, and h6` elements and 
 * require to import the baseline stylesheet.
 *
 * ```scss
 * @use '@sebastienbarbier/design-system/baseline';
 * ```
 * 
 * Size can be overiden using by changing CSS variables:
 * 
 * ```css
 * :root {
 *     --comp-title-fontSizeH1: 2.6em;
 *     --comp-title-fontSizeH2: 2.0em;
 *     --comp-title-fontSizeH3: 1.8em;
 *     --comp-title-fontSizeH4: 1.6em;
 *     --comp-title-fontSizeH5: 1.4em;
 *     --comp-title-fontSizeH6: 1.2em;
 * }
 * ```
 * 
 * Simply use the `H1` element to display titles within your html. 
 * Headline can be added using the `<span>` tag.
 */
export default {
  title: "Components/Title",
  tags: [],
  render: ({ headline, title, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
<h1><span>${headline}</span> ${title} h1</h1>
<h2><span>${headline}</span> ${title} h2</h2>
<h3><span>${headline}</span> ${title} h3</h3>
<h4><span>${headline}</span> ${title} h4</h4>
<h5><span>${headline}</span> ${title} h5</h5>
<h6><span>${headline}</span> ${title} h6</h6>
    `;
  },
  argTypes: {
    headline: { control: "text" },
    title: { control: "text" },
  },
};

export const Simple = {
  name: "Basic use",
  args: {
    headline: "Headline",
    title: "This is a title",
  }
};


/**
 * You need to use the `.right` class on `ul.badges` element to display a list of badge aligned to the right
 */
export const Right = {
  name: "Custom alingment",
  render: ({ label, ...args }) => {
    return `
<h2 class="left"><span>Headline</span> Title aligned</h2>
<h2 class="center"><span>Headline</span> Title aligned</h2>
<h2 class="right"><span>Headline</span> Title aligned</h2>
    `;
  },
};
