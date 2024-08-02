var express = require('express');
var app = express();
app.get('/sam',function (req,res) {
	res.send("Welcome to express js world tested by samatha");
	
});
app.listen(3000);