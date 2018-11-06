//
//this is just to play around with it doesn't do anything at all

function getSelectedValue()
{
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue)
    return selectedValue;
}
    var genreID = getSelectedValue();
    var games = $(this).attr("data-games");


var buttons = ["Popular", "Price", "Age Restriction", "Genre"];


$("button").on("click", function() {


    var queryURL = "https://www.giantbomb.com";
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var results = response.data;
    
})
});


function jsonCallback(json){
    console.log(json);
  }
  
  $.ajax({
    url: "http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-2.json",
    dataType: "jsonp"
  });

