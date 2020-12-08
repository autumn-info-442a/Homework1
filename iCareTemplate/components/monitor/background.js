console.log("background.js activated")
console.log(window.location.href)


chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason == "install") {
      setInitialSettings();
  }
});

window.addEventListener('load', () => {
  let videoLinks = document.getElementsByClassName("yt-simple-endpoint")
  console.log(videoLinks)
})


  // post: threshold is updated
function newThreshold() {
  watchThreshold = 0; 
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

// matching url expression: '*://*.youtubekids.com/watch/*', or 'https://*.youtubekids.com/watch*'
