/**
 * Created by yangshibin on 2017/6/5.
 */
var http = require('http');
var server = http.createServer(function (req, res) {
    req.setEncoding('utf-8');
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<div style="text-align: center"><h1 style="color: #255cd5">Node server</h1>' +
        '<p style="color: #6d6b6a;font-size: 16px">Hello, nice to meet you!</p></div>');
    res.end();
});
server.listen(6090);
console.log('Server is listening at port 6090!')