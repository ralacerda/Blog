const postcssPresetEnv = require("postcss-preset-env");
const pruneVar = require("postcss-prune-var");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("autoprefixer"),
    cssnano({ preset: ["default", { calc: false }] }),
    postcssPresetEnv({
      stage: 2,
    }),
    pruneVar(),
  ],
};
