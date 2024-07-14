import "@sebastienbarbier/design-system/baseline.scss";

/**
 * The badge component can be used to display a list of key words or tags.
 *
 * ## How to use
 *
 * Badges are displayed using the `.badge` class and required to import the baseline stylesheet.
 *
 * ```scss
 * @use '@sebastienbarbier/design-system/baseline';
 * ```
 *
 * Then use directly the `<p class="badge"> ... </p>` element to display a badge within your html
 *
 */
export default {
  title: "Components/Badge",
  tags: [],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
      <p class="badge">${label}</p>
    `;
  },
  argTypes: {
    label: { control: "text" },
  },
};

/**
 * Basic use of the badge component
 */
export const Simple = {
  name: "Basic use",
  args: {
    label: "This is a badge",
  },
};

/**
 * You need to use the `ul.badges` element to display a list of badge within your html
 */
export const List = {
  name: "List of badges",
  args: {
    label: "This is a badge",
  },
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
<ul class="badges">
  <li>Pixel perfect integration</li>
  <li>CSS Animation</li>
  <li>Javascript</li>
  <li>Typescript</li>
  <li>React</li>
  <li>Angular</li>
  <li>Redux</li>
  <li>IndexedDB</li>
  <li>Web/Service workers</li>
  <li>D3.js</li>
  <li>Cypress</li>
  <li>PWA</li>
</ul>
    `;
  },
};


/**
 * You need to use the `.right` class on `ul.badges` element to display a list of badge aligned to the right
 */
export const Right = {
  name: "Align to the right",
  render: ({ label, ...args }) => {
    return `
<ul class="badges right">
  <li>Pixel perfect integration</li>
  <li>CSS Animation</li>
  <li>Javascript</li>
  <li>Typescript</li>
  <li>React</li>
  <li>Angular</li>
  <li>Redux</li>
  <li>IndexedDB</li>
  <li>Web/Service workers</li>
  <li>D3.js</li>
  <li>Cypress</li>
  <li>PWA</li>
</ul>
    `;
  },
};
