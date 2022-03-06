## a simple wallet chrome extension coding by typescript + react
## content script 
it's code that executes after a webpage loaded that you can affect and manipulate and work with the actual content of the webpage itself.
## background script
it's a script that loads when you launch chrome and it's listening for events associated with the activity of using the chrome browser as a piece of software itself. So it can listen for things like browser actions also page actions.
```javascript
// listing btn clicked
chrome.browserAction.onClicked.addListener(btnClicked)
function btnClicked(tab) {
  console.log(tab) // current tab actived
  chrome.tabs.sendMessage(tab.id, {txt: "message"} /* here could be a json, not a json string */ ) // send to particular tab by tab.id 
}

// content-script.js
chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage( message, sender, sendResponse) {
  console.log(message.txt)
}
```