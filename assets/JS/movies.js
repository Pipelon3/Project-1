//Stuff to make Movie info show

$("#submitPress").on("click", function() {
let movie = $("#user-input").val().trim();
let queryURL = myqueryURL + "&type=movie&plot=short&t="  + movie 
$.ajax({
url: queryURL,
method: "GET"
}).then(function (response) {
let results = response;
console.log(results)
$("#info-appear-here").empty();
let title = $("<h2>").text("Title: " + results.Title);
$("#info-appear-here").append(title)
//let movieDiv = $("<img>"); 
//$("#movie-view").prepend(movieDiv)
// movieDiv.append(results.Poster)
let plot = $("<p>").text("Plot: " + results.Plot);
$("#info-appear-here").append(plot)
let rating = $("<p>").text("Rating: "  + results.Rated)
$("#info-appear-here").append(rating)

})
event.preventDefault();
let movieName = $("#user-input").val().trim();
let newMovie = {
name: movieName,
}
database.ref().push(newMovie)
console.log(newMovie.name)
});

//Stuff to make the buttons show up

let movies = [];

function displaymovieInfo() {
    let movie = $(this).attr("data-name");
    let queryURL = myqueryURL + "&type=movie&plot=short&t="  + movie
  
    $.ajax({
      url: queryURL,
      contentType: "text/html",
      method: "GET"
      }).then(function(response) {
        $("#movie-view").empty();
        for ( let i = 0; i < response.data.length; i ++){
          let a = $("<iframe>");
          a.addClass("movie");
          a.attr('src', response.data[i].embed_url);
          a.attr('type', response.data[i].type);
          $("#movie-view").append(a);
        }         
      });            
}

function renderButtons() {
    $("#buttons-view").empty();
    for (let i = 0; i < movies.length; i++) {
        let a = $("<button>");
        a.addClass("movie-btn");
        a.attr("data-name", movies[i]);
        a.text(movies[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-movie").on("click", function(event) {
    event.preventDefault();
    let movie = $("#movie-input").val().trim();
    movies.push(movie);
    renderButtons();
});

$(document).on("click", ".movie-btn", displayMovieInfo);

renderButtons();