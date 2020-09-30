var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Name : Nattapad Mueankid');
  res.end('nickname : An');
  res.end('Student code : 60030029');
}).listen(3007);
