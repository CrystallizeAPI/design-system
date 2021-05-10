module.exports = {
  stories: [
    '../**/*.stories.mdx',
    '../**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
