var games = ["The Legend of Zelda", "Bioshock", "Kingdom Hearts", "The Witcher"];
    
function displayGameInfo() {
    var game = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5KZDAjtUy2sVI1b6KIs3blyHtx4vUAK9&q=" + game + "&limit=10&offset=0&rating=R&lang=en";

    $.ajax({
      url: queryURL,
      contentType: "text/html",
      method: "GET"
      }).then(function(response) {
        $("#game-view").empty();
        for ( var i = 0; i < response.data.length; i ++){
          var a = $("<iframe>");
          a.addClass("game");
          a.attr('src', response.data[i].embed_url);
          a.attr('type', response.data[i].type);
          $("#game-view").append(a);
        }         
      });            
    }

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < games.length; i++) {
        var a = $("<button>");
        a.addClass("game-btn");
        a.attr("data-name", games[i]);
        a.text(games[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-game").on("click", function(event) {
    event.preventDefault();
    var game = $("#game-input").val().trim();
    games.push(game);
    renderButtons();
});

$(document).on("click", ".game-btn", displayGameInfo);

renderButtons();