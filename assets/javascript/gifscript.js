var topics = ["Aardvark", "Elephant", "Rainstorm"];

function displayTopicGifs() {
    var topic = $(this).attr("data-topic");
    $("#retrievedGifs").empty();

    console.log(topic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=Sk691sxiwZCXghJC3KzxBALR0DPLYXLm&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                // var gifDiv = $("<div>");
                var rating = results[i].rating;
                // var p = $("<p>").text("Rating: " + rating);
                // var gifImage = $("<img>");
                var still = results[i].images.fixed_height_still.url;
                var animate = results[i].images.fixed_height.url;
                // gifImage.attr("data-state", "still");
                // gifImage.attr("data-animate", animate);
                // gifImage.attr("data-still", still);
                // fixed_height_still
                // gifDiv.prepend(p);
                // gifDiv.prepend(gifImage);
                buildAGif(rating, still, animate);
                // $("#retrievedGifs").prepend(gifDiv);
            }
        });
};

function buildAGif(rating, still, animate) {
    var gifDiv = $("<div>");
    var p = $("<p>").text("Rating: " + rating);
    var gifImage = $("<img>");
    gifImage.attr("src", still);
    gifImage.attr("data-state", "still");
    gifImage.attr("data-animate", animate);
    gifImage.attr("data-still", still);
    gifDiv.prepend(p);
    gifDiv.prepend(gifImage);

    $("#retrievedGifs").prepend(gifDiv);
};

function renderButtons() {
    $("#buttonDiv").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("gifTopic");
        a.attr("data-topic", topics[i]);
        a.text(topics[i]);
        console.log(a);
        $("#buttonDiv").append(a);
    }
}

// Handle when the add new animal button is clicked
$("#add-gif").on("click", function () {
    event.preventDefault();

    var gifSearchTerm = $("#gif-input").val().trim();

    if (!topics.includes(gifSearchTerm)) {
        $("#buttonDiv").append("<button>" + gifSearchTerm + "</button>");
        topics.push(gifSearchTerm);
        console.log(topics);
        $("#gif-input").val("");
    };

    renderButtons();

});

// Calling the renderButtons function to display the initial gif search terms
renderButtons();

$(document).on("click", ".gifTopic", displayTopicGifs);
