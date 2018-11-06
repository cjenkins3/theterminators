

// first goal is to get the first ten listed results 
// based on a category
// top 10 most bought games on xbox this year

// some variables

var game;
var price;
var genre;
var poular;
var agerest;

function buildQueryURL() {
//     // queryURL is the url we'll use to query the API
    var queryURL = "https://www.giantbomb.com";
  
//     // Begin building an object to contain our API call's query parameters
//     // Set the API key
    var queryParams = { "api-key": "020f014925d48c42945182a55ffb88c3935919d5 " };


//     // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);



// I want this to create a list of 10 games
// Yummy aren't they  ;D   PROJECTONE\theterminators\assets\images\mmmQtips.gif
// inside class joke for my TA



// well it is displaying, just not on the page
// its in the console

// now I wan't the button Genre to be an input which we will probably have to put in the index.html
// gonna pull some more code from the NY times activity lesson
// search terms input looks good

// here is what q says I do
// dropdown element


// specify return type is json because def is XML
// give a filter with a game name


function getSelectedValue()
{
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue)
    return selectedValue;
}
// on click listener to make api calls


// https://stackoverflow.com/questions/43671008/html-javascript-calling-a-function-with-drop-down-options
// hardcode all genres on form
// html forms grabbing genre picked
// work backwards
// existing app 

// build our app around our api

var genreID = getSelectedValue();
var games = $(this).attr("data-games");
var buttons = ["Popular", "Price", "Age Restriction", "Genre"];


$("button").on("click", function() {


    var games = $(this).attr("data-games");
    var queryURL = "https://www.giantbomb.com/api/genres/?api_key=020f014925d48c42945182a55ffb88c3935919d5";
    // var genreID = getSelectedValue();



    
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response) {

        var results = response.data;
    
        
});

})
