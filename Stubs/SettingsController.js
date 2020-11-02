// pre: no input
// post: returns all settings as JSON
function getSettings() {
  // TODO additional functionality in retrieving and returning settings
  return SettingsModel.getCurrentSettingsandData();
}

// The following functions will be called by SettingsView when needed

// pre: accepts message to be added as input
// post: message is added
function addMessage(message) {
  // TODO functionality to read and add custom message incl error handling incl error handling
  SettingsModel.addMessage();
}

// pre: accepts message to be removed as input
// post: message is removed
function removeMessage(message) {
  // TODO functionality to remove a message incl error handling
  SettingsModel.removeMessage();
}

// pre: accepts a message to be edited (message1) and the new text (message2) as input
// post: message is updated/edited
function editMessage(message1, message2) {
  // TODO functionality to edit a message incl error handling
  SettingsModel.editMessage(message1, message2);
}

// pre: a new watch threshold (1-5) to be added as input
// post: watch threshold is updated
function updateWatchThreshold(videos) {
  // TODO functionality to update threshold incl error handling
  SettingsModel.updateWatchThreshold();
}

// pre: a currently existing premade message
// post: message status is toggled
function updatePremadeMessage(message) {
  // TODO functionality to toggle status of a message incl error handling
  SettingsModel.updatePremadeMessage();
}

// pre: accepts a category to be toggled
// post: category status is changed
function updateCategory(category) {
  // TODO functionality to toggle status of a category incl error handling
  SettingsModel.updateCategory();
}
