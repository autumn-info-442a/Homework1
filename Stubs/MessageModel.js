// pre: video watch threshold has been met
// post: start process of displaying message and tracks the time
function whenThresholdMet() {
  // TODO events that will occur when threshold is met (message display, timer, etc)
  SettingsModel.getRandomMessage();
  trackTime();
}

// pre: message has begun displaying
// post: timer is zero and watch count is also set to zero
function trackTime() {
  // TODO functionality to track time
  MonitorModel.messsageFinished();
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