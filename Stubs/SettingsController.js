(function() {

  // SettingsModel

  // pre: no inputs
  // post: list of enabled categories
  function getMessageCategory() {
    // TODO functionality to get enabled message categories
    return ["Message category"]; 
  }

  // pre: no inputs
  // post: list of custom messages
  function getCustomMessages() {
    // TODO functionality to compile list of custom messages
    return ["custom message"];
  }

  // pre: no inputs
  // post: list of enabled premade messages
  function getPremadeMessages() {
    // TODO functionality to compile list of enabled premade messages
    return ["premade message"];
  }

  // pre: no inputs
  // post: current watch threshold (1-5)
  function getWatchThreshold() {
    // TODO functionality to retrieve current watch threshold
    return threshold;
  }

  // SettingsView

  // pre: message to be added
  // post: true if success; false if failed
  function addMessage(message) {
    // TODO functionality to read and add custom message
    return true;
  }

  // pre: message to be removed
  // post: true if success; false if failed
  function removeMessage(message) {
    // TODO functionality to remove a message
    return true;
  }

  // pre: message to be edited (message1) and the new text (message2)
  // post: true if success; false if failed
  function editMessage(message1, message2) {
    // TODO functionality to edit a message
    return true;
  }

  // pre: new watch threshold (1-5)
  // post: none
  function updateWatchThreshold(videos) {
    // TODO functionality to update threshold
  }

  // pre: message
  // post: true if success; false if failed
  function updatePremadeMessage(message) {
    // TODO functionality to toggle status of a message
    return true;
  }
})();