var express = require('express');
var path = require('path');

var port = process.env.PORT || 4200;
var app = express();

app.use(express.static('./dist/mlb-scores'));

app.listen(port, function () {
  console.log('Server is running.. on ' + Port + ' something');
});