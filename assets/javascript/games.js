$("button").on("click", function() {
    var games = $(this).attr("button-choice");

    var queryURL =

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
})