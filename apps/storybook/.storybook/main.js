module.exports = {
    stories: ["../../../packages/ui/components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      {
        name: "@storybook/addon-postcss",
        options: {
          postcssLoaderOptions: {
            implementation: require("postcss"),
          },
        },
      },
    ],
    framework: "@storybook/react",
    features: { emotionAlias: false },
    webpackFinal(config) {
      delete config.resolve.alias['emotion-theming'];
      delete config.resolve.alias['@emotion/styled'];
      delete config.resolve.alias['@emotion/core'];
      return config;
    },
  }
  