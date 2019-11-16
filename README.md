# Giphy Retriever
Giphy Retriever allows for users to generate gifs based on search terms they input into the provided textbox through frontend use of the Giphy API. This is all part of a homework assignment for UCLA's Fullstack Web Development Coding Bootcamp (September 2019 to March 2020). In particular, this assignment is asking for DOM manipulation and querying of an API to generate interactivity on page.

The page loads with several default buttons already generated. A user may select any button and be provided with ten gifs matching the label on the button in the space below where the buttons are displayed. Each gif offers a rating and a textarea containing the "Gif URL" for linking purposes, allowing a user to select and copy the gif URL to share. This field is read only, so users will not be able to alter the text within.

If a user scrolls beyond all the gifs to the bottom of the page, they have the option to select to "Retrieve 10 more Gifs." Selecting this button will append ten more gifs to the end of the currently displayed gifs by increasing the offset used in the API queryURL; this offset will increase by ten each time this button is pressed, until a new top-screen button is selected. Upon selecting a button on page top, the offset will be reset to its starting value, and ten gifs matching the top page button selection will be generated.

Users also may use the "Retrieve Gifs About..." labeled textbox to input search terms of their own, such as "Dog." When a user inputs a term or phrase, then selects the "Add New Button!" button, their new input will be pushed to the existing button array. That button array will be looped through to generate new buttons in the top button display, now including the new user input. Selecting that new user input button will provide related gifs in the space below the button display as long as there are gifs on the Giphy API that match that input.

Currently on page reload the button display reverts to its initial array values.

## Page Objective
To generate gifs related to the terms saved as buttons in the top display div of the page.

## Languages Used
* CSS3
* HTML5
* JavaScript

## Libraries Used
* jQuery (AJAX also utilised)

## APIs Used
* Giphy API

## Future Features
* Save favourite gifs.
* Integrate with OMDB API to generate gifs related to movie data from OMDB API.
* Generate localStorage retention of new buttons input by the user to allow for persistence of information across browser sessions.

## Resources
Header image is from (https://publicdomainvectors.org/).