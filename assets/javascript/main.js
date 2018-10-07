$(document).ready(function(){

$(".container-rect").addClass("animated bounceInUp");

$("#search-bar").keypress(function(event) {
var searchQuery = $("#search-bar").val();
  if ( event.which == 13 ) {
    window.location.href = 'http://www.google.com/search?q=' + searchQuery;
  }
});

if (localStorage.getItem("locCity") == null) {
	localStorage.setItem("locCity", "lake stevens")
}
if (localStorage.getItem("locCountry") == null) {
	localStorage.setItem("locCountry", "us")
}
if (localStorage.getItem("unit") == null) {
	localStorage.setItem("unit", "&deg;C")
	$("#cel").attr('checked', 'checked');
} else if(localStorage.getItem("unit") == "&deg;C") {
	$("#cel").attr('checked', 'checked');
} else if(localStorage.getItem("unit") == "&deg;F") {
	$("#far").attr('checked', 'checked');
}

var baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = localStorage.getItem('locCity');
var country = localStorage.getItem('locCountry')
var key = "&APPID=exmaplePass";
var apiurl = baseURL + city + "," + country + key;
var unit = localStorage.getItem('unit');

$(".entercity").attr("value", city);
$(".entercountry").attr("value", country);

function getWeather() {
	var baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
	var city = localStorage.getItem('locCity');
	var country = localStorage.getItem('locCountry')
	var key = "&APPID=exmaplePass";
	var apiurl = baseURL + city + "," + country + key;
	var unit = localStorage.getItem('unit');

	$.getJSON(apiurl,function(result){
		var temp = result.main.temp;
		if (localStorage.getItem("unit") == "&deg;C") {
			temp = temp - 273.15;
			temp = Math.round(temp);
		} else if (localStorage.getItem("unit") == "&deg;F") {
			temp = temp - 273.15;
			temp = temp * 1.8;
			temp = temp + 32;
			temp = Math.round(temp);
		}

		$("#weather").empty().append(result.name + ": " + temp + unit + ", " + result.weather[0].description);
	});
}
getWeather();

$("#save").click(function(){
	if ($('.entercity').length > 0 && $('.entercity').val() != '') {
		localStorage.setItem("locCity", $(".entercity").val());
	}
	if ($('.entercountry').length > 0 && $('.entercountry').val() != '') {
		localStorage.setItem("locCountry", $(".entercountry").val());
	}
	if ($('input[id=far]').is(":checked")) {
		localStorage.setItem("unit", "&deg;F");
	}
	if ($('input[id=cel]').is(":checked")) {
		localStorage.setItem("unit", "&deg;C");
	}
	getWeather();
	$(".settings").slideToggle();
});

var date = new Date();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var weekday = weekdays[date.getDay()];
var month = date.getMonth();
var monthday = date.getDate();
var year = date.getYear();

$('#weekday').html(weekday);

switch (monthday) {
	case 1:
	case 21:
	case 31:
    	var affix = "st";
		$('#month-date').html(months[month] + " " + monthday + "<sup>" + affix + "</sup> " + (year+1900));
    	break;
	case 2:
	case 22:
    	var affix = "nd";
		$('#month-date').html(months[month] + " " + monthday + "<sup>" + affix + "</sup> " + (year+1900));
    	break;
	case 3:
	case 23:
     	var affix = "rd";
		$('#month-date').html(months[month] + " " + monthday + "<sup>" + affix + "</sup> " + (year+1900));
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
   	var affix = "th";
		$('#month-date').html(months[month] + " " + monthday + "<sup>" + affix + "</sup> " + (year+1900));
}

function btcprice() {
var currency = "USD";
var apiurl = 'https://api.coindesk.com/v1/bpi/currentprice/' + currency + '.json';

$.ajax({
  type: "GET",
  url: apiurl,
  async: false,
  dataType: 'json',
  success: function(data){
    var price = data["bpi"][currency]["rate_float"];
	  var priceRounded = Math.round(price);
	  $("#btc-price").append("$" + priceRounded + " " + currency);
    },
  error: function(errorMessage){}
});
}
btcprice();

var subreddit = "News";
var apiurl = 'https://www.reddit.com/r/' + subreddit + '/.json?';
var postnum = 1;

function updatepost() {
    $.ajax({
      type: "GET",
      url: apiurl,
      async: false,
      dataType: 'json',
      success: function(data){
        var title = data["data"]["children"][postnum]["data"]["title"];
		var score = data["data"]["children"][postnum]["data"]["score"];
		if (title.length >= 100) {
			var shorttitle = title.substring(0, 70);
			shorttitle += "...";
		} else {
			var shorttitle = title;
		}
		  	$("#news-title").empty().prepend(shorttitle);
		  	$("#score-3").empty().append('<span class="mdi mdi-heart"> </span>' + ' ' + score);
		  	$("#news-title-link").attr("href","https://reddit.com" + data["data"]["children"][postnum]["data"]["permalink"]);
      	},
      	error: function(errorMessage){}
    }); // END ajax call
} // End Update Post function
updatepost();

$("#next-post-news").click(function(){
	postnum = postnum+2;
	updatepost();
});

});
