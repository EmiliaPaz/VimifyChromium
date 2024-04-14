// Variable that will recieve the line number from the user.
// Note: We use var here in purpose to override the variable everytime the
// script is injected. This is not great, but the other option is to insert
// script once and listen for every key event.
var lineNumber = "";

// Keycodes.
var enterKey = 13;
var oneKey = 48;
var nineKey = 57;
var extensionCommandKey = 93;

// Add keyboard handler to get line number.
window.addEventListener("keyup", getLineNumber);

function getLineNumber(event) {
  const enterKey = 13;
  const oneKey = 48;
  const nineKey = 57;
  const extensionCommandKey = 93;

  if (event.keyCode >= oneKey && event.keyCode <= nineKey) {
    lineNumber = lineNumber.concat(event.key);
  } else if (event.keyCode == enterKey) {
    // Attribute's data-line-number is one less than the actual line.
    lineNumber = parseInt(lineNumber) - 1;

    // Go to line.
    document.querySelector(`a[data-line-number='${lineNumber}']`).click();

    window.removeEventListener("keyup", getLineNumber);
  } else if (event.keyCode != extensionCommandKey) {
    console.log(
      "Must press a number value (0-9) to select the line, or enter to end. Press control+comma to begin again."
    );

    window.removeEventListener("keyup", getLineNumber);
  }
}
