

//Need to change API here to search info API

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5KZDAjtUy2sVI1b6KIs3blyHtx4vUAK9&q=" + search + "&limit=10&offset=0&rating=R&lang=en";

    $.ajax({
      url: queryURL,
      contentType: "text/html",
      method: "GET"
      }).then(function(response) {
        console.log(response);
        }         
      )