$("#submitPress").on("click", function() {
let movie = $("#user-input").val().trim();
let queryURL = TVshowURL + "&query="  + movie
$.ajax({
 url: queryURL,
 method: "GET"
}).then(function (response) {
 let results = response;
 console.log(results)
 $("#info-appear-here").empty();
 let title = $("<h2>").text("Title: " + results.results[0].name);
 $("#info-appear-here").append(title)
 let movieDiv = $("<img>"); 
 $("#show-view").prepend(movieDiv)
 movieDiv.attr("src", "https://image.tmdb.org/t/p/w500" + results.results[0].poster_path)
 $("#show-view").append(movieDiv)
 let plot = $("<p>").text("Plot: " + results.results[0].overview);
 $("#info-appear-here").append(plot)
 let rating = $("<p>").text("First Aired: "  + results.results[0].first_air_date)
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