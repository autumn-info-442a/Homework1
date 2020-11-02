// pre: no input 
// post: return a Random message 
function getRandomMessage() {
    //TODO: Randomly select a message from all selected pools.
    return ["A random message"] 
}

// pre: no input 
// post: return all of the current setting as an JSON object
function getCurrentSettingsAndData() {
    //TODO: Return both current settings about selected message pool, watched time threshold, and all the messages (both pre-made and custom message) 
    return ["alliCareSetting"]
}

// pre: newThreshold(number type): the new threshold value inputted by user  
// post: update the video watched threshold in MonitorModel
function updateVideoThreshold(newThreshold) {
	// TODO: Update the newThreshold value to the MonitorModel 
    MonitorModel.update(newThreshold)
}

// pre: accepts message to be added as input
// post: message is added
function addMessage(message) {
// TODO functionality to read and add custom message
}

// pre: accepts message to be removed as input
// post: message is removed
function removeMessage(message) {
// TODO functionality to remove a message
}

// pre: accepts a message to be edited (message1) and the new text (message2) as input
// post: message is updated/edited
function editMessage(message1, message2) {
// TODO functionality to edit a message
}

// pre: a new watch threshold (1-5) to be added as input
// post: watch threshold is updated
function updateWatchThreshold(videos) {
// TODO functionality to update threshold
}

// pre: a currently existing premade message
// post: message status is toggled
function updatePremadeMessage(message) {
// TODO functionality to toggle status of a message
}

// pre: accepts a category to be toggled
// post: category status is changed
function updateCategory(category) {
    // TODO functionality to toggle status of a category
}
    