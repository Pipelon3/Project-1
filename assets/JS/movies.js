//Stuff to make Movie info appear

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

// var movies = [];

// function displaymovieInfo() {
//     var movie = $(this).attr("data-name");
//     var queryURL = "https://api.themoviedb.org/4/search/movie?api_key=a22239c0a3a0a19a69effb094f260e6a + movie;

//     $.ajax({
//       url: queryURL,
//       contentType: "text/html",
//       method: "GET"
//       }).then(function(response) {
//         $("#movie-view").empty();
//         for ( var i = 0; i < response.data.length; i ++){
//           var a = $("<iframe>");
//           a.addClass("movie");
//           a.attr('src', response.data[i].embed_url);
//           a.attr('type', response.data[i].type);
//           $("#movie-view").append(a);
//         }         
//       });            
// }

// function renderButtons() {
//     $("#buttons-view").empty();
//     for (var i = 0; i < movies.length; i++) {
//         var a = $("<button>");
//         a.addClass("movie-btn");
//         a.attr("data-name", movies[i]);
//         a.text(movies[i]);
//         $("#buttons-view").append(a);
//     }
// }

// $("#add-movie").on("click", function(event) {
//     event.preventDefault();
//     var movie = $("#movie-input").val().trim();
//     movies.push(movie);
//     renderButtons();
// });

// $(document).on("click", ".movie-btn", displaymovieInfo);

// renderButtons();

