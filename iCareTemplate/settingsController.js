// pre: no input 
// post: return a Random message 
export function getRandomMessage() {
    //TODO: Randomly select a message from all selected pools.
    return ["A random message"]
}
  
  // pre: no input 
  // post: return all of the current setting as an JSON object
export function getCurrentSettingsAndData() {
    //TODO: Return both current settings about selected message pool, watched time threshold, and all the messages (both pre-made and custom message) 
    return ["alliCareSetting"]
}
  
  // pre: no input 
  // post: returns the current watch threshold
export function getThreshold() {
    // TODO: Update the newThreshold value to the MonitorController
    return threshold;
}
  
  // pre: no inputs
  // post: all settings are displayed
   export function displaySettings() {
    // TODO functionality to parse and display settings
    // This function interacts with SettingsView to display the page with appropriate data
  }
  
  // pre: accepts message to be added as input
  // post: message is added
export function addMessage(message) {
   // TODO functionality to read and add custom message incl error handling incl error handling
}
  
  // pre: accepts message to be removed as input
  // post: message is removed
export function removeMessage(message) {
    // TODO functionality to remove a message incl error handling
}
  
  // pre: accepts a message to be edited (message1) and the new text (message2) as input
  // post: message is updated/edited
export function editMessage(message1, message2) {
    // TODO functionality to edit a message incl error handling
}
  
  // pre: a new watch threshold (1-5) to be added as input
  // post: watch threshold is updated
export function updateWatchThreshold(videos) {
    // TODO functionality to update threshold incl error handling
}
  
  // pre: a currently existing premade message
  // post: message status is toggled
export function updatePremadeMessage(message) {
    // TODO functionality to toggle status of a message incl error handling
}
  
// pre: accepts a category to be toggled
// post: category status is changed
export function updateCategory(category) {
    // TODO functionality to toggle status of a category incl error handling
}