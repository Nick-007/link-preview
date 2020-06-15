const express = require('express');
const linkPreview = require("link-preview");
const app = express();
const port = process.env.PORT || 8080;
app.get('/', function (req, res) {
  res.send(await linkPreview(req.query.url));
});
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

