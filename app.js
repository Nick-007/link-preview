const linkPreview = require("link-preview");
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.get('/:url', function (req, res) {
  res.send(await linkPreview(req.params.url));
});
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

