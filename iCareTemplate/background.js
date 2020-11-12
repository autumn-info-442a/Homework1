console.log("background.js activated")

chrome.browserAction.onClicked.addListener(buttonClicked)

let msg = {
    txt: "hello"
}

function buttonClicked(tab) {
    console.log("button Clicked")
    console.log(tab)
    chrome.tabs.sendMessage(tab.id, msg)
}
