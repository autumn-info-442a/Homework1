// pre: no input 
// post: append the iCare Overlay on top of the Youtube video
function appendiCareOverlay() {
	// TODO: Append the iCareOverlay with a customer message to the brower. 
	randomMessage = MessageModel.getRandomMessage();
	time = MessageModel.getTime();
	document.getElementById("youtubePlayer").append("iCareOverlay");
}

