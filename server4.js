var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
		res.writehead(200,{'Content-Type': 'text/html'});
		res.write(uc.upperCase("Wish you all success"));
	    res.end();
}).listen(8080);