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

            setTimer();
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
    }, 100);
}

function injectOverlay() {
    let videoContainerParent = document.getElementById('player-container-outer');
    if (videoContainerParent) {
        console.log('outer-container found');
        let overlay = document.createElement('div');

        let size = videoContainerParent.getBoundingClientRect();

        overlay.style.backgroundColor = '#F48D97';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.setAttribute('class', 'style-scope ytk-two-column-watch-next-results-renderer');
        overlay.setAttribute('id', 'iCare Overlay');
        overlay.append(generateOverlay());
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

function generateOverlay() {
    let overlayOuterContainer = document.createElement('section');
    let overlayInnerContainer = document.createElement('div');
    overlayInnerContainer.setAttribute('class', 'icare-overlay');

    // top-icons

    let iconsContainer = document.createElement('div');
    iconsContainer.setAttribute('class', 'top-icons');

    let logoContainer = document.createElement('div');
    logoContainer.setAttribute('class', 'icare-logo-container');
    let logoImg = document.createElement('img');
    logoImg.setAttribute('id', 'icare-logo');
    logoImg.setAttribute('src', chrome.runtime.getURL('components/assets/iCare_Logo_1_small.png'));
    logoImg.setAttribute('alt', 'icare-logo');
    logoContainer.append(logoImg);

    let timerContainer = document.createElement('div');
    timerContainer.setAttribute('class', 'timer-container');
    let iconSpan = document.createElement('span');
    iconSpan.setAttribute('class', 'timer-icon');
    let timerImg = document.createElement('img');
    timerImg.setAttribute('id', 'timer-img');
    timerImg.setAttribute('src', '../assets/icons8-timer-48.png');
    timerImg.setAttribute('alt', 'timer-icon');
    iconSpan.append(timerImg);
    let timerCountSpan = document.createElement('span');
    timerCountSpan.setAttribute('class', 'timer-count');

    let timerCount = document.createElement('p');
    timerCount.setAttribute('class', 'timer-count-p')
    timerCountSpan.append(timerCount);

    timerContainer.append(iconSpan);
    timerContainer.append(timerCountSpan);

    iconsContainer.append(logoContainer);
    iconsContainer.append(timerContainer);

    // header
    let header = document.createElement('header');
    let headerText = document.createElement('h1');
    headerText.innerHTML = 'Before your next video:';
    header.append(headerText);

    // message container 
    let messageContainer = document.createElement('div');
    messageContainer.setAttribute('class', 'message-container');
    let message = document.createElement('p');
    message.setAttribute('class', 'message');
    message.innerHTML = 'test';
    messageContainer.append(message);

    // close button

    let button = document.createElement('button');
    button.setAttribute('class', 'close-button');
    button.setAttribute('type', 'button');
    button.innerHTML = 'Close';
    button.addEventListener('click', (e) => {
        showVideo();
    })

    overlayInnerContainer.append(iconsContainer);
    overlayInnerContainer.append(header);
    overlayInnerContainer.append(messageContainer);
    overlayInnerContainer.append(button);
    overlayOuterContainer.append(overlayInnerContainer);
    return overlayOuterContainer;
}

function setTimer() {
    let timer = document.getElementsByClassName('timer-count-p');
    console.log(timer);
    timer.innerHTML = 15;
    console.log(timer);
}