This is a assignment_w10c project
We know have the ability to react to more than just our user clicking things. We can react to things like mouse movement, keyboard clicks, even things like the page has finished loading.

 

Setup a GitHub repository and local git repository
This workflow should be fairly automatic by now
Setup the index.html to link to your app.js file
Add in at least 5 content tags onto your page.
Create an event listener for each of the following scenarios:
The user hovers their mouse over an element
The user clicks an element
The user presses the space key on their keyboard
HINT: This is not tied to any particular element, but using the 'body' might be a good one to attach to!
Each on of these events should trigger a change on the page that is visual.
This can be changing style, or injecting more HTML into the page. Whatever you like
BONUS:

Add an event that will change the background color of the body after 15 seconds on the page
You will need to understand how to react to TIME based events for this one: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout (Links to an external site.) This is an event that is not based on a user interacting with an element but instead an amount of time passing.
Add an event that will move an item on the page randomly every 3 seconds
You will need to understand how to react to a different TIME based event for this one:  https://developer.mozilla.org/en-US/docs/Web/API/setInterval (Links to an external site.) This is an event that will happen repeatedly over a certain amount of time.
You're going to have to use transforms for this one!
You will also have to read https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random (Links to an external site.) to figure out how to use JS built in functions to generate random values!
HARD - Try to see if you can detect if the user ever hits ALL the following keys anywhere on the page in any order:
s, e, c, r, e, t
If you ever detect these keys being hit inject a P tag that says "You found the secret" onto the page.
Note that any other keys can be hit as well. You are seeing if the user ever hits those keys in any order while on the page.
Add, commit and push to GitHub your changes and submit the GitHub URL.