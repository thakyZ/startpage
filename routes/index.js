'use strict';

var express = require('express');
var router = express.Router();
var config = require('./config.js');
var weather = require('./weather.js');
var date = require('./date.js');
var holiday = require('./holiday.js');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Index', search_url: config.json.search, subreddit: config.json.reddit_feed, weather: weather.text, holiday: holiday.text, date: date.text, lists: config.json.links, copies: config.json.copies, require:require });
});

module.exports = router;
