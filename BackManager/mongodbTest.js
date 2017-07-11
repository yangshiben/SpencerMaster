/**
 * Created by yangshibin on 2017/7/10.
 */
var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('home_db', server, {w: 1});

client.open(function (err) {
    if (err) {
        console.log(err);
    }
    client.collection('testInsert', function (err, collection) {
        if (err) throw err;
        collection.insert({
            "name": "mryang",
            "age": "24",
            "description": "Handsome boy!"
        }, {safe: true}, function (err, doc) {
            if (err) throw err;
            console.log('the id is ' + doc[0]._id);
        });
    });
})