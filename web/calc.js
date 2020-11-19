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
    // When the display showing the final result, clear the entire string
    clearDisplay();
  } else {
    // Remove lastly inserted character from string
    document.getElementById("display").innerText = document.getElementById("display").innerText.slice(0, -1);
  }
}

/**
 * Remove all characters & allow type-in
 */
function clearDisplay() {
  document.getElementById("display").innerText = ""; // Remove all characters
  displayResult = false; // Allowing Type-in
}

/**
 * Get calculated result from Node server
 *
 * After result displayed, this function will block keyboard type-in before the display cleared
 */
async function result() {
  // Get result
  const response = await fetch(`http://localhost:4000/result?${document.getElementById("display").innerText}`);
  document.getElementById("display").innerText = await response.text();

  // mark display need to be cleared
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
    clearDisplay();
  }
  // Add character assigned to clicked button at the end of existing string
  document.getElementById("display").insertAdjacentText("beforeend", button);
}

/**
 * Check whether
 *   1. the calculator is ready to get user input
 *        If not ready, make it to ready state before it append the string
 *   2. user pressed "Enter"
 *        if "Enter" pressed, run result() function to get result
 */
async function keyInput() {
  // Check whether it is ready to get user input or not
  if(displayResult) {
    clearDisplay();
  }

  // When "Enter" pressed, run result() function
  // noinspection JSDeprecatedSymbols
  if(event.code === "Enter") {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.trim();
    await result();
  }
}