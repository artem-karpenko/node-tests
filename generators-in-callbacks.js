'use strict';

var request = require('request');

function http(url, cb) {
    request(url, (err, response, body) => {
        if (err) {
            return cb(err);
        }
        return cb(body);
    })
}

function simpleHttpTest() {
    http('http://soccer.smiss.ua/api/player', (response) => {
        console.log(response);
    });
}
// simpleHttpTest();

function genHttp(url) {
    http(url, (response) => {
        test.next(response);
    });
}

function* generatorHttpTest() {
    console.log('Before HTTP');
    console.log(yield genHttp('http://soccer.smiss.ua/api/player'));
    console.log('After HTTP');
}

var test = generatorHttpTest();
test.next();