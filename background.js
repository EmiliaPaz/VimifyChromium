chrome.commands.onCommand.addListener((command) => {
  if (command === "go-to-line") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab.url.startsWith("https://source.chromium.org/")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["go_to_line_script.js"],
        });
      } else {
        console.log(
          "Extension is only functional on Chromium source code pages."
        );
      }
    });
  }
});
