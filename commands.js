// Commands:
// Go to Line.
let lineNumberCommand = false;
let lineNumber = "";

function keyPressed(event) {
  // Go to Line Command:
  if (
    !lineNumberCommand &&
    event.keyCode == colonEvent.keyCode &&
    event.shiftKey == colonEvent.shiftKey
  ) {
    // Begin listening for line number.
    lineNumberCommand = true;
  } else if (
    lineNumberCommand &&
    event.keyCode >= oneEvent.keyCode &&
    event.keyCode <= nineEvent.keyCode
  ) {
    // Append number to line number.
    lineNumber = lineNumber.concat(event.key);
  }
  // Enter to finish command.
  else if (lineNumberCommand && event.keyCode == enterEvent.keyCode) {
    // Substract one from lineNumber since attribute's data-line-number is one
    // less than the actual line.
    lineNumber = parseInt(lineNumber) - 1;
    // Clicking the attribute scrolls to the line.
    document.querySelector(`a[data-line-number='${lineNumber}']`).click();
    // Command cleanup
    lineNumber = "";
    lineNumberCommand = false;
  }
}

window.addEventListener("keyup", keyPressed);
