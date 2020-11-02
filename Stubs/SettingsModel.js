// pre: no input 
// post: return a Random message 
function getRandomMessage() {
    //TODO: Randomly select a message from all selected pools.
    return ["A random message"] 
}

// pre: no input 
// post: return all of the current setting as an JSON object
function getCurrentSettingAndData() {
    //TODO: Return both current settings about selected message pool, watched time         threshold, and all the messages (both pre-made and custom message) 
    return ["alliCareSetting"]
}

// pre: newThreshold(number type): the new threshold value inputted by user  
// post: update the video watched threshold in MonitorModel
function updateVideoThreshold(newThreshold) {
	//TODO: Update the newThreshold value to the MonitorModel 
    //MonitorModel.update(newThreshold)
}
