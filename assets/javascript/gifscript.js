var gifs = ["Aardvark", "Elephant", "Rainstorm"];

function renderButtons() {
    $("#buttonDiv").empty();

    for (var i = 0; i < gifs.length; i++) {
        var a = $("<button>");
        a.addClass("gif");
        a.attr("data-name", gifs[i]);
        a.text(gifs[i]);
        $("#buttonDiv").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-gif").on("click", function () {
    event.preventDefault();

    var gifSearchTerm = $("#gif-input").val().trim();

    if (!gifs.includes(gifSearchTerm)) {
        $("#buttonDiv").append("<button>" + gifSearchTerm + "</button>");
        gifs.push(gifSearchTerm);
    };

    renderButtons();

});

// Calling the renderButtons function to display the initial gif search terms
renderButtons();