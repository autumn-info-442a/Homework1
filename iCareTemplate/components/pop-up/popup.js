window.addEventListener("load", function() {
  document.getElementById("settings").addEventListener("click", function() {
    chrome.runtime.openOptionsPage();
  });
});



