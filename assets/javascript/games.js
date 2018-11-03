
// first goal is to get the first ten listed results 
// based on a category
// top 10 most bought games on xbox this year

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
// I love Q tips  ;D PROJECTONE\theterminators\assets\images\mmmQtips.gif
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

