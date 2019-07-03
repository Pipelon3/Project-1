//Stuff to make Movie info show

$("#submitPress").on("click", function() {
let movie = $("#user-input").val().trim();
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
//let rating = $("<p>").text("Rating: "  + results.results[0])
//$("#info-appear-here").append(rating)

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

