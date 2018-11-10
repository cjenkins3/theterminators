

// first goal is to get the first ten listed results 
// based on a category
// top 10 most bought games on xbox this year

// some variables

    var baseURL = 'http://giantbomb.com/api';
    var apiKey = '020f014925d48c42945182a55ffb88c3935919d5';
    var format = 'json';

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

// on click listener to make api calls


// https://stackoverflow.com/questions/43671008/html-javascript-calling-a-function-with-drop-down-options
// hardcode all genres on form
// html forms grabbing genre picked
// work backwards
// existing app 

// build our app around our api

// now we need to figure out how to append the data to the page
// loop through data.result/ array
// filter if it is a resource-type = game
// if it is then display
// if not skip
// 
// now we need to get our query to change from crash bandicoot
// 
$(document).ready(function(){
    $("button").on("click", function() {
        event.preventDefault();
        $.ajax({
        url: "http://api.giantbomb.com/api/games/?",
        type: "get",
        data: {api_key : "020f014925d48c42945182a55ffb88c3935919d5", limit: "5", resources : "game" , format : "jsonp", json_callback : "gamer" },
        dataType: "jsonp"
        });
    });
});

$(document).ready(function(){
    $("#genre-button").on("click", function() {
        event.preventDefault();
        
        $.ajax({
        url: "http://api.giantbomb.com/api/genres/?",
        type: "get",
        data: {api_key : "020f014925d48c42945182a55ffb88c3935919d5", limit: "5", resources : "game" , format : "jsonp", json_callback : "genre" },
        dataType: "jsonp"
        });
    });
});

$(document).ready(function(){
    $("#age-button").on("click", function() {
        event.preventDefault();

        $.ajax({
        url: "http://api.giantbomb.com/api/game_ratings/?",
        type: "get",
        data: {api_key : "020f014925d48c42945182a55ffb88c3935919d5", limit: "5", resources : "game" , format : "jsonp", json_callback : "age" },
        dataType: "jsonp"
        });
    });
});

$(document).ready(function(){
    $("#popular-button").on("click", function() {
        event.preventDefault();
        
        $.ajax({
        url: "http://api.giantbomb.com/api/reviews/?",
        type: "get",
        data: {api_key : "020f014925d48c42945182a55ffb88c3935919d5", limit: "5", resources : "game" , format : "jsonp", json_callback : "reviews" },
        dataType: "jsonp"
        });
    });
});

function gamer(data) {
    var toAppend = "";
    $("#popular-info").empty();
    $("#age-info").empty();
    // $("#genre-info").empty();
    $("#image-display").empty();
    $.each(data.results, function(i,o) {
        // console.log(o.name);
        // console.log(o.resource_type);
        toAppend += "<option>" + o.name + "</option>";
        // console.log(data.results);
    var image = $("<img>",
    { id: "Myid",
        src: o.image.original_url,
        width: 300
 }).appendTo($("#image-display"));
    });
    
    $("#games-info").append(toAppend);
}

function genre(data) {
    
    var toGenreAppend = "";
    $("#popular-info").empty();
    $("#age-info").empty();
    // $("#genre-info").empty();
    $("#image-display").empty();
    $.each(data.results, function(i,o) {
        // console.log(o.name);
        // console.log(o.resource_type);
        toGenreAppend += "<option>" + o.name + "</option>";
        // console.log(data.results);
    
    });
    
    $("#genre-info").append(toGenreAppend);
}

function age(data) {
    var toAgeAppend = "";
    $("#popular-info").empty();
    $("#age-info").empty();
    $("#genre-info").empty();
    $("#image-display").empty();
    $.each(data.results, function(i,o) {
        // console.log(o.name);
        // console.log(o.resource_type);
        toAgeAppend += "<option>" + o.name + "</option>";
        // console.log(data.results);
    
    });
    
    $("#age-info").append(toAgeAppend);
}

function reviews(data) {
    var toPopularAppend = "";
    $("#popular-info").empty();
    $("#age-info").empty();
    $("#genre-info").empty();
    $("#image-display").empty();
    $.each(data.results, function(i,o) {
        // console.log(o.name);
        // console.log(o.resource_type);
        toPopularAppend += "<option>" + o.score + " " + "<h1>Stars</h1> " + "</option>";
        // console.log(data.results);
    
    });
    
    $("#popular-info").append(toPopularAppend);
console.log(data);
}

function clear(){
    $("#genre").empty()
}
//something to test

// function buildQueryURL() {
//     var queryURL = "https://www.giantbomb.com/api/search/?"

//     var queryParams = { "api-key": "020f014925d48c42945182a55ffb88c3935919d5" };

//     queryParams.q = $("#search-term")
//     .val()
//     .trim();
    
// }

// $(document).ready(function(){
//     $("button").on("click", function() {
//     $.ajax({
//       url: "http://api.giantbomb.com/search/",
//       type: "get",
//       data: {api_key : "020f014925d48c42945182a55ffb88c3935919d5", query: "Assassins Creed", format : "jsonp", json_callback : "gamer" },
//       dataType: "jsonp"
//         });
//     });
// });

// function gamer(data) {
//     var toAppend = "";
//     $.each(data.results, function(i,o) {
//         // console.log(o.name);
//         // console.log(o.resource_type);
//         toAppend += "<option>" + o.name + "</option>";
//         // console.log(data.results);
//     var image = $("<img>",
//     { id: "Myid",
//         src: o.image.original_url,
//         width: 300
//  }).appendTo($("#image-display"));
//     });
    
//     $("#games-info").append(toAppend);
// }