/**
 * Created by yangshibin on 2017/6/8.
 */
var http = require('http');
var fs = require('fs');
var parse = require('url').parse;
var join = require('path').join;
var root = __dirname;
var server = http.createServer(function (req, res) {
    var url = parse(req.url);
    var path = join(root, url.pathname);
    fs.stat(path, function (err, stat) {
        if (err) {
            if (err.code == 'ENOENT') {
                res.statusCode == 404;
                res.end('Not Found');
            }
            else {
                res.statusCode = 500;
                res.end('Interval Server Error');
            }
        }
        else {
            res.setHeader('Content-Length', stat.size);
            var stream = fs.createReadStream(path);
            stream.pipe(res);
            stream.on('error', function (err) {
                console.log(err);
                res.statusCode = 500;
                res.end('Interval Server Error');
            })
        }
    });
})
server.listen(3600);
console.log('Server is listening at port 3600');