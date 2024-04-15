# Vimify Chromium

Vimium Chromium is a Chrome extension which provides keyboard shortcuts inspired
by Vim editor.

### Keyboard Shortcuts

| Shortcut    | Description                   |
| ----------- | ----------------------------- |
| :\<number\> | Go to a specific line number. |

### How to build

1. Clone repo
2. Go to chrome://extensions
3. Click on 'Load unpacked' and select the extension
4. Navigate to any file on https://source.chromium.org/. Try any of the
   shortcuts :)

### Updates

#### Version 2

- 2.0: Moved to listening for all key press events so we a) inject script
  only once and b) convert the extension to be vim for Chromium. Only command
  supported is 'go to line'.

##### Version 1

- 1.0: MVP extension. Works, but unnecesarily injects same script multiple
  times (which required using var for variables).
