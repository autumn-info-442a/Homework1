console.log("background.js activated")
console.log(window.location.href)


window.addEventListener('load', () => {
  let videoLinks = document.getElementsByClassName("yt-simple-endpoint")
  console.log(videoLinks)
})


  // post: threshold is updated
function newThreshold() {
    watchThreshold = 0; 
}
  
// matched url pattern: https://www.youtubekids.com/watch?v=sLuSq2RL9X0

// matching url expression: '*://*.youtubekids.com/watch/*', or 'https://*.youtubekids.com/watch*'
