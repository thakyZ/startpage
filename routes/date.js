'use strict';

async function getDate() {
  return new Promise(function (resolve, reject) {
    var date = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekday = weekdays[date.getDay()];
    var month = date.getMonth();
    var monthday = date.getDate();
    var year = date.getYear();
    let text = "";
    //year = year + 1900
    switch (monthday) {
      case 1:
      case 21:
      case 31:
        text = `${weekday} ${months[month]} ${monthday}<sup>st</sup> ${(year + 1900)}`;
        break;
      case 2:
      case 22:
        text = `${weekday} ${months[month]} ${monthday}<sup>nd</sup> ${(year + 1900)}`;
        break;
      case 3:
      case 23:
        text = `${weekday} ${months[month]} ${monthday}<sup>rd</sup> ${(year + 1900)}`;
        break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
        text = `${weekday} ${months[month]} ${monthday}<sup>th</sup> ${(year + 1900)}`;
    }
    resolve(text);
  });
}

module.exports = { text: null };

getDate().then(function (value) {
  module.exports.text = value;
});