'use strict';

var request = require('request');
var Promise = require('Promise');
var math = require('mathjs');
var config = require('./config.js');
var htmltools = require('./html-tools.js');

var city = config.json.weather.city;
var country = config.json.weather.country;
var unit = config.json.weather.unit;
var apikey = config.json.weather.key;

var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apikey}`;

async function weather() {
  return new Promise(function (resolve, reject) {
    request(url, function (err, response, body) {
      if (err) {
        reject(err);
      }
      else {
        let json = JSON.parse(body);
        if (json.main == undefined) {
          reject('ERROR: undefined');
        }
        else {
          let temp = json.main.temp;
          if (unit === 'C') {
            temp = temp - 273.15;
            temp = math.round(temp);
          } else if (unit === 'F') {
            temp = temp - 273.15;
            temp = temp * 1.8;
            temp = temp + 32;
            temp = math.round(temp);
          }
          let degree = htmltools.decodeEntities('&deg;');
          resolve(`${json.name}: ${temp}${degree}${unit}, ${json.weather[0].description}`);
        }
      }
    });
  });
}

module.exports = { text: null };

weather().then(function (value) {
  module.exports.text = value;
});