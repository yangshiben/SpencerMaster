/**
 * Created by yangshibin on 2017/7/17.
 */
var express = require('express');
var route = express.Router();

//Home page
route.get('/', function (req, res) {
    res.sendfile('app/index.html');
});
module.exports = route;