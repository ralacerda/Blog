const postcssPresetEnv = require("postcss-preset-env");
const pruneVar = require("postcss-prune-var");

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    postcssPresetEnv({
      stage: 2,
    }),
    pruneVar(),
  ],
};
