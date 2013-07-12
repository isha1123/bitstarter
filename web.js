var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var fileName = "Index.html";

var outputData = fs.readFileSync(fileName, encoding);

app.get('/', function(request, response) {
  response.send(outputData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
