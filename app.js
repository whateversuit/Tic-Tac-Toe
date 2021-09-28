// 1. store a gameboard as array inside Gameboard object.
// 2. Make player 1 and 2 obejcts
// 3. make game flow an object aswell
//      Main goal, have as little global code as possible. Tuck
//      stuff into modules or factory function
//      rule: if you need one of something, use module, otherwise, use factory.
// 4. set ut HTML and JS function to render contents of gameboard array to webpage
// 5. Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!
//      Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!
// 6. Build logic check for game over (3 in a row or tie)
// 7. clean up interface - start restart button. Add display showing winner.
// 8. OPTIONAL - Create AI to play against.