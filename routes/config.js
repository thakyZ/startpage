'use strict';
var path = require('path');
var fs = require('fs');

var data;
var json;

console.log('*** LOADING CONFIG ***');
data = fs.readFileSync(path.join(__dirname, '../config/config.json'));
console.log('*** CONFIG LOADED ***');
console.log('*** PARSING CONFIG ***');
json = JSON.parse(data);
console.log('*** CONFIG PARSED ***');

module.exports = { json: json, data: data }