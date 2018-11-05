
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
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api-endpoint.igdb.com";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = { "api-key": "b22a38958f254adf3bafb79cc8be854e" };

    // Logging the URL so we have access to it for troubleshooting
//   console.log("---------------\nURL: " + queryURL + "\n---------------");
//   console.log(queryURL + $.param(queryParams));
//   return queryURL + $.param(queryParams);

}

// I want this to create a list of 10 games
// Yummy aren't they  ;D   PROJECTONE\theterminators\assets\images\mmmQtips.gif
// inside class joke for my TA

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/genres/",
    headers: {
        "user-key": "b22a38958f254adf3bafb79cc8be854e",
        Accept: "application/json"
    }
}).then(function(resp) {
    console.log(resp);
}).catch(function(err) {
    console.log(err);
})

// well it is displaying, just not on the page
// its in the console

// now I wan't the button Genre to be an input which we will probably have to put in the index.html
// gonna pull some more code from the NY times activity lesson
// search terms input looks good

// dropdown element
// on click listener to make api calls
// https://stackoverflow.com/questions/43671008/html-javascript-calling-a-function-with-drop-down-options
// hardcode all genres on form
// html forms grabbing genre picked
// work backwards
// existing app 
