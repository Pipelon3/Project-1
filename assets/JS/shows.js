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