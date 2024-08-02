var express = require('Express');

var app = express();

var things = require('./express3.js');

app.use('/balaji',things);

app.listen(3000);