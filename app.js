const express = require('express');
const linkPreview = require("../link-preview");
const app = express();
const port = 80;

app.get('/', function (req, res) {
   (async function() {
   const response = await linkPreview(req.query.url);
	res.send(response);
  	})(req,res);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
  });

