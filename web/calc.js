/**
 * Javascript file to handle events and get calculation results from Node.js Server
 *
 * @author Hyecheol (Jerry) Jang
 */
let displayResult = false; // indicate display does not showing result

/**
 * Remove most recently added character
 */
function backspace() {
  if(displayResult) {
    clear();
  } else {
    // TODO
  }
}

/**
 * Remove all characters & allow type-in
 */
function clear() {
  // TODO
  displayResult = false;
}

/**
 * Check for input validity (only allow numbers and selected operators)
 * and get calculated result from Node server
 *
 * After result displayed, this function will block keyboard type-in before the display cleared
 */
function result() {
  // TODO
  displayResult = true;
}

/**
 * Add a character associated with each button
 *
 * @param button character associated with the button
 */
function input(button) {
  // When display is showing result, we need to clear the display before we start new calculation
  if(displayResult) {
    clear();
  }
  // Add character assigned to clicked button at the end of existing string
  document.getElementById("display").insertAdjacentText("beforeend", button);
}

/**
 * Check whether user pressed "Enter"
 * if "Enter" pressed, run result() function to get result
 */
function enterDetect() {
  // TODO
}