$(document).ready(function () {
  var apiurl = 'https://www.reddit.com/' + subReddit + '/.json?';
  console.log(subReddit);
  var postnum = 1;

  function updatepost() {
    $.ajax({
      type: "GET",
      url: apiurl,
      async: false,
      dataType: 'json',
      success: function (data) {
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
        $("#news-title-link").attr("href", "https://reddit.com" + data["data"]["children"][postnum]["data"]["permalink"]);
      },
      error: function (errorMessage) { }
    }); // END ajax call
  } // End Update Post function
  updatepost();

  $("#next-post-news").click(function () {
    postnum = postnum + 2;
    updatepost();
  });
});