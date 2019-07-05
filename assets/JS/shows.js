//Stuff to make Show info appear

$("#submitPress").on("click", function() {
let show = $("#user-input").val().trim();
let queryURL = TVshowURL + "&query="  + show
$.ajax({
 url: queryURL,
 method: "GET"
}).then(function (response) {
 let results = response;
 console.log(results)
 $("#info-appear-here").empty();
 let title = $("<h2>").text("Title: " + results.results[0].name);
 $("#info-appear-here").append(title)
 let showDiv = $("<img>"); 
 $("#show-view").prepend(showDiv)
 showDiv.attr("src", "https://image.tmdb.org/t/p/w500" + results.results[0].poster_path)
 $("#show-view").append(showDiv)
 let plot = $("<p>").text("Plot: " + results.results[0].overview);
 $("#info-appear-here").append(plot)
 let rating = $("<p>").text("First Aired: "  + results.results[0].first_air_date)
 $("#info-appear-here").append(rating)

})
event.preventDefault();
let showName = $("#user-input").val().trim();
let newShow = {
 name: showName,
}
database.ref().push(newShow)
console.log(newShow.name)

});