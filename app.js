const express = require('express');
const linkPreview = require("../link-preview");
const app = express();
const port = process.env.PORT || 8080;

app.get('/link', function (req, res) {
   (async function() {
   const response = await linkPreview(req.query.url);
	res.send(response);
  	})(req,res);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
  });

