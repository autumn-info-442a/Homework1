console.log("Youtube Kid activated")

// a temporary placeholder for tthreshol. 
// Will import the data from SettingsModel in the future

const WATCH_THRESHOLD = 2; 

let videoCount = 0; 

let currentURL = '';

let previousURL = '';

window.addEventListener('load', (event) => {
    console.log(checkURL());
    setInterval(() => {checkURL()}, 500)
});

function checkURL() {
    currentURL = window.location.href
    if (currentURL != previousURL) {
        let newRegExp = /watch/; 
        let isMatched = newRegExp.test(currentURL)
        if (isMatched) {
            console.log('here is previous video count: ', videoCount)
            updateCurrentVideoCount(); 
            console.log('here is current video count: ', videoCount)
        }
        previousURL = currentURL
        if (videoCount == WATCH_THRESHOLD) {
            hideVideoContainer();
            pauseVideo();
            injectOverlay()
            resetVideoCount();
            // temporay implemetation for the timer. 
            setTimeout(() => {
                showVideo();
            }, 5000)
        }
    }
} 

function updateCurrentVideoCount() {
    videoCount += 1; 
    console.log('Video count updated')
}

function resetVideoCount() {
    videoCount = 0; 
    console.log('Video count resetted')
}

function hideVideoContainer() {
    let videoContainer;
    const intervalId = setInterval(() => {
        videoContainer = document.getElementById('player-container-inner');
        if (videoContainer != undefined) {
            console.info('Container element found');
            videoContainer.setAttribute('hidden', '')
            clearInterval(intervalId);
            return videoContainer
        }
    }, 500);
}

function injectOverlay() {
    let videoContainerParent = document.getElementById('player-container-outer');
    if (videoContainerParent) {
        console.log('outer-container found');
        let overlay = document.createElement('div');

        let size = videoContainerParent.getBoundingClientRect();

        overlay.style.backgroundColor = '#F48D97';
        overlay.style.width = size.width + 'px';
        overlay.style.height = size.height + 'px';
        overlay.setAttribute('class', 'style-scope ytk-two-column-watch-next-results-renderer');
        overlay.setAttribute('id', 'iCare Overlay');
        videoContainerParent.append(overlay);
        console.log('overlay injected');
    }
}

function pauseVideo() {
    let pauseButton;
    const intervalId = setInterval(() => {
        pauseButton = document.getElementById('player-play-pause-button');
        if (pauseButton) {
            console.info('pauseButton element found');
            clearInterval(intervalId);
        }
    }, 500);
    setTimeout(() => {
        pauseButton.click();
        console.log('video paused')
    }, 1000)
}

function showVideo() {
    let videoContainer = document.getElementById('player-container-inner');
    let overlay = document.getElementById('iCare Overlay')
    overlay.remove();
    videoContainer.removeAttribute('hidden');
    console.log('video is back'); 
}
  
// Code Stubs:

// // pre: video watch threshold has been met
// // post: start process of displaying message and tracks the time
// function whenThresholdMet() {
//     // TODO events that will occur when threshold is met (message display, timer, etc)
//     SettingsController.getRandomMessage();
//     trackTime();
//   }
  
//   // pre: message has begun displaying
//   // post: timer is zero and watch count is also set to zero
//   function trackTime() {
//     // TODO functionality to track time
//     MonitorController.messsageFinished();
//   }
  
//   // pre: no input 
//   // post: append the iCare Overlay on top of the Youtube video
//   function appendiCareOverlay() {
//       // TODO: Append the iCareOverlay with a customer message to the brower. 
//       document.getElementById("youtubePlayer").append("iCareOverlay");
//   }