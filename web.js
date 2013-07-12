var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var fileName = "index.html";

var outData = fs.readFileSync(fileName, 'utf8');

//console.log(outData);

app.get('/', function(request, response) {
  response.send(outData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
