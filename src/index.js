var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './base.html'));
});

app.use(express.static('static'));

var port = 8080
app.listen(port, function() {
  console.log('Listening on port %s', port);
});
