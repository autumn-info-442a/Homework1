(function(){
  // pre: The user still has a count video of zero
  // post: After the video count has been done, the count gets back to zero due to MessageModel
  function MonitorModel() {
    // TODO Replace w actual function for tracking how many YouTube videos user has watched. Make use of the MessageModel to tell that message has been displayed.
    return videoCount;
  }

  // pre: sets threshold
  // post: Threshold has been met
  function thresholdMet() {
    // TODO Replace w actual function to determine whether threshold has been made. Make use of the SettingsModel to notify that threshold has been met.
    return;
  }
})();
