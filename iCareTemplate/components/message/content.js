console.log("Youtube Kid activated");

const WATCH_THRESHOLD = 5; 
const TIMER = 3;

let currentMessage = '';
let videoCount = 0; 
let currentURL = '';
let previousURL = '';
let currentOverlayIntervalId = '';
let changeTimerIntervalId = '';

let isUpdateCountAfterRefresh;

window.addEventListener('load', () => {
    setInterval(() => {checkURL()}, 500)
    setMessage();

    chrome.runtime.sendMessage({checkIsUpdatingCountAfterRefresh: true}, (response) => {
        isUpdateCountAfterRefresh = response.result;
    })
});

function checkURL() {
    currentURL = window.location.href;
    if (currentURL != previousURL) {
        let urlRegExp = /watch/; 
        let isMatched = urlRegExp.test(currentURL);
        if (isMatched) {
            console.log('here is previous video count: ', videoCount);
            updateCurrentVideoCount(); 
            console.log('here is current video count: ', videoCount);
        }
        previousURL = currentURL;
        if (videoCount == WATCH_THRESHOLD) {
            injectOverlay();
            hideVideoContainer();
            pauseVideo();
            resetVideoCount();
            setTimer();
        }
    }
} 

function updateCurrentVideoCount() {
    if (isUpdateCountAfterRefresh) { // check if the refresh happened after an overlay is removed
        console.log("here is vidoe count after overlay closed: ", videoCount);
        chrome.runtime.sendMessage({isUpdatingCountAfterRefreshData: false});
        isUpdateCountAfterRefresh = false;
    } else {
        videoCount += 1; 
        console.log('Video count updated');
    }
}

function resetVideoCount() {
    videoCount = 0; 
    console.log('Video count resetted')
}

function hideVideoContainer() {
    const intervalId = setInterval(() => {
        videoContainer = document.getElementById('player-container-inner');
        if (videoContainer != undefined) {
            console.info('Container element found');
            videoContainer.setAttribute('hidden', '');
            clearInterval(intervalId);
        }
    }, 100);
}

function injectOverlay() {
    let videoContainerParent = document.getElementById('player-container-outer');
    if (videoContainerParent) { // not sure if i need this if statement. seems like outer-container is always there. 
        console.log('outer-container found');

        let overlayInnerContainer = document.getElementById('player-container-inner');
        let size = overlayInnerContainer.getBoundingClientRect()

        videoContainerParent.append(generateOverlay(size.height));
        console.log('overlay successfully injected');

        // Remove overlay when user trying to work around the overlay 
        // by refreshing / clicking another video 
        let overlayedURL = currentURL;
        currentOverlayIntervalId = setInterval(() => {
            let currentURL = window.location.href;
            if (overlayedURL !== currentURL) {
                removeOverlayAndShowVideo();
            }
        }, 100);
    } else {
        console.log("injection failed");
    }
}

function setMessage() {
    chrome.runtime.sendMessage({getRandomMessage: true}, (response) => {
        currentMessage = response.message;
    });
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

function removeOverlayAndShowVideo() {
    clearInterval(currentOverlayIntervalId);
    clearInterval(changeTimerIntervalId);
    let videoContainer = document.getElementById('player-container-inner');
    let overlay = document.getElementById('icare-overlay')
    overlay.remove();
    videoContainer.removeAttribute('hidden');
    console.log('video is back'); 

    // setMessage everytime after an overlay is removed, 
    // , so the message would be always ready when the next over fires
    setMessage();

    chrome.runtime.sendMessage({isUpdatingCountAfterRefreshData: true});

    window.location.reload();
}

function setTimer() {
    let currentTime = TIMER;
    let timer = document.getElementById('timer-count');
    timer.innerHTML = currentTime;
    let changeTimerIntervalId = setInterval(() => {
        currentTime--;
        timer.innerHTML = currentTime;
        if (currentTime === 0) {
            clearInterval(changeTimerIntervalId);
            //enable button
            let button = document.getElementById('close-button');
            button.classList.toggle('disabled');
            button.removeAttribute('disabled');
        }
    }, 1000);
}
  
function generateOverlay(height) {
    let overlayContainer = document.createElement('div');
    overlayContainer.setAttribute('id', 'icare-overlay');
    overlayContainer.style.height = height + 'px';
    // top-icons

    let iconsContainer = document.createElement('div');
    iconsContainer.setAttribute('id', 'top-icons');

    let logoContainer = document.createElement('div');
    logoContainer.setAttribute('id', 'icare-logo-container');
    let logoImg = document.createElement('img');
    logoImg.setAttribute('id', 'icare-logo');
    logoImg.setAttribute('src', chrome.runtime.getURL('components/assets/logo.png'));
    logoImg.setAttribute('alt', 'icare-logo');
    logoContainer.append(logoImg);

    let timerContainer = document.createElement('div');
    timerContainer.setAttribute('id', 'timer-container');
    let timerImg = document.createElement('img');
    timerImg.setAttribute('id', 'timer-img');
    timerImg.setAttribute('src', chrome.runtime.getURL('components/assets/icons8-timer-48.png'));
    timerImg.setAttribute('alt', 'timer-icon');

    let timerCount = document.createElement('p');
    timerCount.setAttribute('id', 'timer-count');

    let timerUnit = document.createElement('p');
    timerUnit.setAttribute('id', 'timer-unit');
    timerUnit.innerHTML = 's';

    timerContainer.append(timerImg);
    timerContainer.append(timerCount);
    timerContainer.append(timerUnit);

    iconsContainer.append(logoContainer);
    iconsContainer.append(timerContainer);

    // header
    let header = document.createElement('header');
    let headerText = document.createElement('h1');
    headerText.innerHTML = 'Before your next video:';
    header.append(headerText);

    // message container 
    let messageContainer = document.createElement('div');
    messageContainer.setAttribute('id', 'message-container');
    let messageElement = document.createElement('p');
    messageElement.setAttribute('id', 'messsage');
    messageElement.innerHTML = currentMessage;
    messageContainer.append(messageElement);

    // close button 
    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'button-container');
    let button = document.createElement('button');
    button.setAttribute('id', 'close-button');
    button.setAttribute('class', 'disabled');
    button.setAttribute('type', 'button');
    button.setAttribute('disabled', '');
    button.innerHTML = 'Close';
    button.addEventListener('click', () => {
        removeOverlayAndShowVideo();
    })
    buttonContainer.append(button);

    overlayContainer.append(iconsContainer);
    overlayContainer.append(header);
    overlayContainer.append(messageContainer);
    overlayContainer.append(buttonContainer);
    return overlayContainer;
}