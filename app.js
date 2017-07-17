/**
 * Created by yangshibin on 2017/7/17.
 */

var express = require('express');
var http = require('http');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var index = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('app engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/app')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
   var err = new Error('Not Found!');
   err.status = 404;
   next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

var port =  normalizePort(process.env.port || 8092);
app.set('port', port);
var server = http.createServer(app);
server.listen(port, function () {
    console.log('Express server listening on port ' + app.get('port'));
});

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}