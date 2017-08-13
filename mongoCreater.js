var MongoClien = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/admingod'; //数据库为admingod

var insertData = function(db, callback) {
    //connect site

    var collection = db.collection('site');

    //insert data 

    var data = [{
        "name": "admingod.com",
        "url": "www.admingod.com"
    }, {
        "name": "beike.io",
        "url": "www.beike.io"
    }]

    collection.insert(data, function(err, result) {
        if (err) {
            console.logf('error' + err);
            return
        }
        callback(result)
    })
}

MongoClien.connect(DB_CONN_STR, function(err, db) {
    console.log('connect success')
    insertData(db, function(result) {
        console.log(result)
        db.close()
    })
})