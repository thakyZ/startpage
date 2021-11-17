'use strict';

var holiday = require('moment-holiday');
var moment = require('moment');
var Promise = require('promise');

async function getHoliday() {
  return new Promise(function (resolve, reject) {
    let nowHoliday = moment().isHoliday();
    nowHoliday = nowHoliday ? nowHoliday : "No Holiday";
    resolve(nowHoliday);
  });
}

module.exports = { text: null };

getHoliday().then(function (value) {
  module.exports.text = value;
});