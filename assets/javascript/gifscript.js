var topics = ["Aardvark", "Elephant", "Rainstorm"];

function renderButtons() {
    $("#buttonDiv").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("gifTopic");
        a.attr("data-topic", topics[i]);
        a.text(topics[i]);
        $("#buttonDiv").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-gif").on("click", function () {
    event.preventDefault();

    var gifSearchTerm = $("#gif-input").val().trim();

    if (!topics.includes(gifSearchTerm)) {
        $("#buttonDiv").append("<button>" + gifSearchTerm + "</button>");
        topics.push(gifSearchTerm);
        $("#gif-input").val("");
    };

    renderButtons();

});

$("button").on("click", function () {
    var topic = $(this).attr("data-topic");
    console.log(topic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=Sk691sxiwZCXghJC3KzxBALR0DPLYXLm&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(gifImage);

                $("#retrievedGifs").prepend(gifDiv);
            }
        });
});

// Calling the renderButtons function to display the initial gif search terms
renderButtons();