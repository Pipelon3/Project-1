let myqueryURL = "http://www.omdbapi.com/?apikey=trilogy"
let firebaseConfig = {
  apiKey: "AIzaSyDdNeSGejyUNnUfuVViu5gTiGJ5Ur3Coco",
  authDomain: "our-group-project.firebaseapp.com",
  databaseURL: "https://our-group-project.firebaseio.com",
  projectId: "our-group-project",
  storageBucket: "our-group-project.appspot.com",
  messagingSenderId: "188419258236",
  appId: "1:188419258236:web:16bd2d51ed10d949"
};
firebase.initializeApp(firebaseConfig);
let database = firebase.database();
$("#submitPress").on("click", function() {
  let movie = $("#user-input").val().trim();
  let queryURL = myqueryURL + "&type=movie&s="  + movie 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    let results = response.Search[0];
    console.log(results)
    $("#info-appear-here").append(results.Title)
    let movieDiv = $("<img>") 
    let p = $("<p>").text()
  })
  event.preventDefault();
  let movieName = $("#movie-name").val().trim();
  let newMovie = {
    name: movieName,
  }
  database.ref().push(newMovie)
  console.log(newMovie.name)
  
});
