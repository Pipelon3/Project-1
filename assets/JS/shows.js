

//Stuff to make show info appear

$("#submitPress").on("click", function() {
    let show = $("#user-input").val().trim();
    displayshowInfo(show)
    event.preventDefault();
    if (shows.indexOf(show) === -1){
        shows.push(show);
    }
    renderButtons();
});

$(document).on("click", ".show-btn", showshowInfo)

//Stuff to make the buttons show up

let shows = [];

function showshowInfo() {
    let show = $(this).attr("data-name");
    displayshowInfo(show);           
}

// function renderButtons() {
//     $("#buttons-view").empty();
//     for (var i = 0; i < shows.length; i++) {
//         var a = $("<button>");
//         a.addClass("show-btn");
//         a.attr("data-name", shows[i]);
//         a.text(shows[i]);
//         $("#buttons-view").append(a);
//     }
// }

function displayshowInfo(show) {
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
}

// renderButtons();