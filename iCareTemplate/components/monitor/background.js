console.log("background.js activated")

let isUpdatingCountAfterRefresh = false; 

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.getRandomMessage) {
      sendResponse({message: getRandomMessage().then(function(result) {
        return result;
      })});
      console.log(getRandomMessage().then(function(result) {
        return result;
      }));
    } else if (request.checkIsUpdatingCountAfterRefresh) {
      sendResponse({result: isUpdatingCountAfterRefresh});
      console.log("update message sent: ", isUpdatingCountAfterRefresh)
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
})

// pre: no input 
// post: returns the current watch threshold
function getThreshold() {
  chrome.storage.local.get("threshold", function(result) {
      return result.threshold;
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
            console.log(allMessages[Math.floor(Math.random() * allMessages.length)]);
            resolve(allMessages[Math.floor(Math.random() * allMessages.length)]);
        });
    });
}