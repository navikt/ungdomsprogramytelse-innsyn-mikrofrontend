const tailwind = require("@navikt/ds-tailwind");

module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
  presets: [tailwind]
};
