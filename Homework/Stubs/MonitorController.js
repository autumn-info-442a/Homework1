// pre: user has watched a new video
// post: watch count is incremented by one
function updateWatchCount() {
  // TODO functionality to increment watch count and display message if threshold is met
  if (threshold == SettingsController.getThreshold()) {
    MessageController.whenThresholdMet();
  }
}
