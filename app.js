const express = require('express');
const linkPreview = require("../link-preview");
const app = express();
const port = process.env.PORT || 8080;

app.get('/link', function (req, res) {
   (async function() {
   //const response = await linkPreview("https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs");
   const response = await linkPreview(req.query.url);
	res.send(response);
  	})(req,res);
});
//const start = async function() {
  // const result = await linkPreview("https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs");
  //  console.log(result);
//}
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
  });

