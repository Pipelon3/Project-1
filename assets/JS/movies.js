//Stuff to make Movie info appear

$("#submitPress").on("click", function() {
    let movie = $("#user-input").val().trim();
    displayMovieInfo(movie)
    event.preventDefault();
    if (movies.indexOf(movie) === -1){
        movies.push(movie);
    }
    renderButtons();
});

$(document).on("click", ".movie-btn", showMovieInfo)

//Stuff to make the buttons show up

var movies = [];

function showMovieInfo() {
    var movie = $(this).attr("data-name");
    displayMovieInfo(movie);           
}

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < movies.length; i++) {
        var a = $("<button>");
        a.addClass("movie-btn");
        a.attr("data-name", movies[i]);
        a.text(movies[i]);
        $("#buttons-view").append(a);
    }
}

function displayMovieInfo(movie) {
    let queryURL = myqueryURL + "&query="  + movie 
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function (response) {
        let results = response;
        console.log(results)
        $("#info-appear-here").empty();
        let title = $("<h2>").text("Title: " + results.results[0].title);
        $("#info-appear-here").append(title)
        let movieDiv = $("<img>"); 
        $("#movie-view").prepend(movieDiv)
        movieDiv.attr("src", "https://image.tmdb.org/t/p/w500" + results.results[0].poster_path)
        $("#movie-view").append(movieDiv)
        let plot = $("<p>").text("Plot: " + results.results[0].overview);
        $("#info-appear-here").append(plot)
        let release = $("<p>").text("Release Date: " + results.results[0].release_date)
        $("#info-appear-here").append(release)
        
        })
}

renderButtons();

//Spotify stuff

function getSoundtrack(movie) {
    let queryURL = myqueryURL + "&query="  + movie 
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function (response) {
        
        })

}