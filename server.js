
var http = requires('http')

http.CreateServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello worlds!');
	res.write(req,url);
	res.end();
}).listen(5000);