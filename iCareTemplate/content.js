alert("You are watching Youtube right now")

console.log("Youtube Kid activated")

let video = document.getElementById("ssIFrame_google")
let paragraphs = document.getElementsById('video-title')

video.pause()

for (element of paragraphs) {
    element.style['background-color'] = '#FF00FF';
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt)
}

// Code Stubs:


// // pre: video watch threshold has been met
// // post: start process of displaying message and tracks the time
// function whenThresholdMet() {
//     // TODO events that will occur when threshold is met (message display, timer, etc)
//     SettingsController.getRandomMessage();
//     trackTime();
//   }
  
//   // pre: message has begun displaying
//   // post: timer is zero and watch count is also set to zero
//   function trackTime() {
//     // TODO functionality to track time
//     MonitorController.messsageFinished();
//   }
  
//   // pre: no input 
//   // post: append the iCare Overlay on top of the Youtube video
//   function appendiCareOverlay() {
//       // TODO: Append the iCareOverlay with a customer message to the brower. 
//       document.getElementById("youtubePlayer").append("iCareOverlay");
//   }