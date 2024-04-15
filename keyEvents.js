class KeyEvent {
  constructor(keyCode, shiftKey = false) {
    this.keyCode = keyCode;
    this.shiftKey = shiftKey;
  }
}

// Go to Line command.
const colonEvent = new KeyEvent(186, true);
const enterEvent = new KeyEvent(13);
const oneEvent = new KeyEvent(48);
const nineEvent = new KeyEvent(57);
