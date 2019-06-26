//inital aray of info

var searchs = [];

//Need to change API here to search info API

function displaysearchInfo() {
    var search = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5KZDAjtUy2sVI1b6KIs3blyHtx4vUAK9&q=" + search + "&limit=10&offset=0&rating=R&lang=en";

    $.ajax({
      url: queryURL,
      contentType: "text/html",
      method: "GET"
      }).then(function(response) {
        $("#search-view").empty();
        for ( var i = 0; i < response.data.length; i ++){
          var a = $("<iframe>");
          a.addClass("search");
          a.attr('src', response.data[i].embed_url);
          a.attr('type', response.data[i].type);
          $("#search-view").append(a);
        }         
      });            
    }

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < searchs.length; i++) {
        var a = $("<button>");
        a.addClass("search-btn");
        a.attr("data-name", searchs[i]);
        a.text(searchs[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-search").on("click", function(event) {
    event.preventDefault();
    var search = $("#search-input").val().trim();
    searchs.push(search);
    renderButtons();
});

$(document).on("click", ".search-btn", displaysearchInfo);

renderButtons();