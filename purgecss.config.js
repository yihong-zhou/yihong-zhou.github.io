module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Medium Zoom adds these classes only after a user opens an image, so they
  // never appear in the static HTML scanned during the production build.
  safelist: {
    greedy: [/medium-zoom/],
  },
};
