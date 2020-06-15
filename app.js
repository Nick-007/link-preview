const express = require('express');
//const linkPreview = require("link-preview");
const apl = express();
const port = process.env.PORT || 8080;
apl.get('/', function (req, res) {
  //const result = await linkPreview(req.query.url);
  res.send("Hello World");
});
apl.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

