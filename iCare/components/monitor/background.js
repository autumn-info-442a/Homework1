console.log("background.js activated")

let isUpdatingCountAfterRefresh = false; 
let messageResult;
let threshold;

// technically fence posting?
getRandomMessage().then(function(result) {
  messageResult = result;
  console.log("initializing random message");
});

getThreshold().then(function(result) {
  threshold = result;
  console.log("initializing threshold");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.getRandomMessage) {
      getRandomMessage().then(function(result) {
        messageResult = result;
      });
      sendResponse({message: messageResult});
    } else if (request.checkIsUpdatingCountAfterRefresh) {
      sendResponse({result: isUpdatingCountAfterRefresh});
      console.log("update message sent: ", isUpdatingCountAfterRefresh)
    } else if (request.getThreshold) {
      getThreshold().then(function(result) {
        threshold = result;
      });
      sendResponse({threshold: threshold});
    } else {
      if (request.isUpdatingCountAfterRefreshData) {
        isUpdatingCountAfterRefresh = true;
        console.log("value changed: ", isUpdatingCountAfterRefresh);
      } else {
        isUpdatingCountAfterRefresh = false;
        console.log("value changed: ", isUpdatingCountAfterRefresh);
      }
    }
});

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason == "install") {
      setInitialSettings();
  }
});

window.addEventListener('load', () => {
  let videoLinks = document.getElementsByClassName("yt-simple-endpoint")
  console.log(videoLinks)
});

// pre: no input 
// post: returns the current watch threshold
function getThreshold() {
  return new Promise(resolve => {
    chrome.storage.local.get("threshold", function(result) {
      resolve(result.threshold);
    });
  });
}

function setInitialSettings() {
  chrome.storage.local.set({"category": [
    {
      category: "motivational",
      status: true
    },
    {
      category: "screentime",
      status: true
    },
    {
      category: "exercise",
      status: true
    },
    {
      category: "custom",
      status: true
    }
  ]});
  chrome.storage.local.set({"premade" : {
    motivational: [
      {
        content: "Believe in your dreams!",
        status: true
      }
    ],
    screentime: [
      {
        content: "Have you been outside today?",
        status: true
      }
    ],
    exercise: [
      {
        content: "Have you exercised today?",
        status: true
      }
    ]
  }});
  chrome.storage.local.set({"custom": []});
  chrome.storage.local.set({"threshold" : 3});
}
  
// matched url pattern: https://www.youtubekids.com/watch?v=sLuSq2RL9X0

// pre: no input 
// post: return a Random message 
function getRandomMessage() {
    return new Promise(resolve => {
        console.log("grabbing a random message");
        chrome.storage.local.get(["premade", "custom", "category"], function(result) {
            let premade = result.premade;
            let custom = result.custom;
            let categories = result.category;
            let allMessages = [];
            for (let i = 0; i < categories.length - 1; i++) {
                if (categories[i].status == true) {
                    let tempMessages = premade[categories[i].category];
                    for (let j = 0; j < tempMessages.length; j++) {
                        if (tempMessages[j].status == true) {
                            allMessages.push(tempMessages[j].content);
                        }
                    }
                }
            }
            if (categories[categories.length - 1].status == true) { // custom is the last in the array
                for (let i = 0; i < custom.length; i++) {
                    if (custom[i].status == true) {
                        allMessages.push(custom[i].content);
                    }
                }
            }
            resolve(allMessages[Math.floor(Math.random() * allMessages.length)]);
        });
    });
}