const linkPreview = require("link-preview");

const previewData = await linkPreviewGenerator(
  "https://www.youtube.com/watch?v=8mqqY2Ji7_g"
);
console.log(previewData);
