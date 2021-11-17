$(document).ready(function () {
  $(".container-rect").addClass("animated bounceInUp");

  $("#search-bar").keypress(function (event) {
    var searchQuery = $("#search-bar").val();
    if (event.which == 13) {
      window.location.href = "http://www.google.com/search?q=" + searchQuery;
    }
  });

  if (localStorage.getItem("locCity") == null) {
    localStorage.setItem("locCity", "lake stevens");
  }
  if (localStorage.getItem("locCountry") == null) {
    localStorage.setItem("locCountry", "us");
  }
  if (localStorage.getItem("unit") == null) {
    localStorage.setItem("unit", "&deg;C");
    $("#cel").attr("checked", "checked");
  } else if (localStorage.getItem("unit") == "&deg;C") {
    $("#cel").attr("checked", "checked");
  } else if (localStorage.getItem("unit") == "&deg;F") {
    $("#far").attr("checked", "checked");

    var date = new Date();
    var weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var weekday = weekdays[date.getDay()];
    var month = date.getMonth();
    var monthday = date.getDate();
    var year = date.getYear();

    $("#weekday").html(weekday);

    switch (monthday) {
      case 1:
      case 21:
      case 31:
        $("#month-date").html(
          months[month] +
            " " +
            monthday +
            "<sup>" +
            "st" +
            "</sup> " +
            (year + 1900)
        );
        break;
      case 2:
      case 22:
        $("#month-date").html(
          months[month] +
            " " +
            monthday +
            "<sup>" +
            "nd" +
            "</sup> " +
            (year + 1900)
        );
        break;
      case 3:
      case 23:
        $("#month-date").html(
          months[month] +
            " " +
            monthday +
            "<sup>" +
            "rd" +
            "</sup> " +
            (year + 1900)
        );
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
        $("#month-date").html(
          months[month] +
            " " +
            monthday +
            "<sup>" +
            "th" +
            "</sup> " +
            (year + 1900)
        );
    }
  }
});

function copyTextToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    return clipboardData.setData("Text", text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var cliptextarea = document.createElement("textarea");
    cliptextarea.textContent = text;
    cliptextarea.style.position = "fixed";
    document.body.appendChild(cliptextarea);
    cliptextarea.focus();
    cliptextarea.select();
    try {
      return document.execCommand("copy");
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(cliptextarea);
    }
  }
}
