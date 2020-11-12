// pre: video watch threshold has been met
// post: start process of displaying message and tracks the time
function whenThresholdMet() {
  // TODO events that will occur when threshold is met (message display, timer, etc)
  SettingsController.getRandomMessage();
  trackTime();
}

// pre: message has begun displaying
// post: timer is zero and watch count is also set to zero
function trackTime() {
  // TODO functionality to track time
  MonitorController.messsageFinished();
}

// pre: no inputs
// post: current time is returned
function getTime() {
  // TODO any additional functionality in returning the time
  return currentTime;
}

// pre: no input
// post: returns the current random message
function getRandomMessage() {
  return randomMessage;
}

// pre: no input 
// post: append the iCare Overlay on top of the Youtube video
function appendiCareOverlay() {
	// TODO: Append the iCareOverlay with a customer message to the brower. 
	document.getElementById("youtubePlayer").append("iCareOverlay");
}