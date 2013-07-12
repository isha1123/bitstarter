var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var fileName = "Index.html";

var buf = new Buffer(256);

buf = fs.readFileSync(fileName);

var outData = buf.toString('utf8');


app.get('/', function(request, response) {
  response.send(outData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
