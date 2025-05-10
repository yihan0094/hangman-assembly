/**
 * Project planning:
 * 
 * Questions to ask yourself before writing any code:
 * 
 * - What are the main containers of elements I need
 *   in this app?
 * 
 * 
 * - What values will need to be saved in state vs.
 *   what values can be derived from the state?
 * 
 * 
 * - How will the user interact with the app? What
 *   events do I need to handle?
 * 
 * 
 */

 /**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

 /**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Build a status section below the header.
 * For now, you can just hard-code in the styles for
 * a winning game, and we'll make it more dynamic
 * later.
 */

 /**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Create the language chips. Use the
 * `languages.js` file to pull in the array of
 * languages to use, which contains the language
 * name, background color, and text color.
 * 
 * Hint for layout: use a flex container that can wrap
 * to layout the languages.
 */

 /**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
 */

 /**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */

 /**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: TBA
 * 
 * Think: what would be the best way to store the user's
 * guessed letters? 
 */

 /**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Create a new array in state to hold user's
 * guessed letters. When the user chooses a letter, add
 * that letter to this state array.
 * 
 * Don't worry about whether it was a right or wrong 
 * guess yet.
 */

 /**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Update the keyboard when a letter is right
 * or wrong.
 * 
 * Bonus: use the `clsx` package to easily add conditional 
 * classNames to the keys of the keyboard. Check the docs 
 * to learn how to use it 📖
 */

 /**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Only display the correctly-guessed letters
 * in the word
 */

 /**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge: Derive a variable (`wrongGuessCount`) for the 
 * number of incorrect guesses by using the other state 
 * values we're already holding in the component.
 * 
 * console.log the wrongGuessCount for now
 */

 /**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge: When mapping over the languages, determine how
 * many of them have been "lost" and add the "lost" class if
 * so.
 * 
 * Hint: use the wrongGuessCount combined with the index of
 * the item in the array while inside the languages.map code
 */

 /**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge:
 * 1. Create a variable `isGameOver` which evaluates to `true`
 *    if the user has guessed incorrectly 8 times. Consider how
 *    we might make this more dynamic if we were ever to add or
 *    remove languages from the languages array.
 * 2. Conditionally render the New Game button only if the game
 *    is over.
 */

 /**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge:
 * Conditionally render either the "won" or "lost" statuses
 * from the design, both the text and the styles, based on the
 * new derived variables.
 * 
 * Note: We always want the surrounding `section` to be rendered,
 * so only change the content inside that section. Otherwise the
 * content on the page would jump around a bit too much.
 */

 /**
 * Challenge: Bid farewell to each programming language
 * as it gets erased from existance 👋😭
 * 
 * Use the `getFarewellText` function from the new utils.js
 * file to generate the text.
 * 
 */

 /**
 * Challenge: Disable the keyboard when the game is over
 */

/**
 * Challenge: Choose a random word from a list of words
 * 
 * 1. Create a new function in utils.js that chooses a random
 *    word from the imported array of words and returns it
 * 2. import the function into this file
 * 3. Figure out where to use that function.
 */

/**
 * Challenge: Make the New Game button reset the game
 */

 /**
 * Challenge: Reveal the missing letters of the word if the user
 * loses the game. Style the missing letters to have the same red
 * color as the wrong letter keys.
 */