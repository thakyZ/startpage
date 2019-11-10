"use strict";

$(document).ready(function () {
  $("#search-bar").keypress(function (event) {
    var searchQuery = $("#search-bar").val();
    if (event.which == 13) {
      window.location.href = searchUrl + searchQuery;
    }
  });
});

