const postcssPresetEnv = require("postcss-preset-env");
const postcssnested = require("postcss-nested");
// const autoprefixer = require('autoprefixer')
module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  map: {
    inline: false
  },
  plugins: [
    postcssPresetEnv({
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        "nesting-rules": true
      },
      browsers: "last 2 versions",
      autoprefixer: { grid: true }
    }),
    // 'postcss-import': {},
    // 'postcss-custom-properties': {},
    postcssnested({})
  ]
};
