const linkPreviewGenerator = require("../link-preview");
const start = async function() {
	const previewData = await linkPreviewGenerator(
	  "https://www.youtube.com/watch?v=8mqqY2Ji7_g"
	);
	console.log(previewData);
}
start();
