console.log("background.js activated")

let isUpdatingCountAfterRefresh = false; 

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.getRandomMessage) {
      sendResponse({message: getRandomMessage()});
    } else if (request.checkIsUpdatingCountAfterRefresh) {
      sendResponse({result: isUpdatingCountAfterRefresh});
      console.log("update message sent: ", isUpdatingCountAfterRefresh)
    } else {
      if (request.isUpdatingCountAfterRefreshData) {
        isUpdatingCountAfterRefresh = true;
        console.log("value changed: ", isUpdatingCountAfterRefresh);
      } else {
        isUpdatingCountAfterRefresh = false;
        console.log("value changed: ", isUpdatingCountAfterRefresh);
      }
    }
});



function getRandomMessage() {
  return "I am a random message!";
}