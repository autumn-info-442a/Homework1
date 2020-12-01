(function() {
    "use strict";

    window.addEventListener("load", initialize);

    function initialize() {
        $("add").addEventListener("click", addMessage);
        chrome.storage.local.set({"custom": []}); // purely for testing, remove later
    }

    // pre: no inputs
    // post: all settings are displayed
    function displaySettings() {
        // TODO functionality to parse and display settings
        // This function interacts with SettingsView to display the page with appropriate data
    }

    /**
     * Custom messages are stored as an array of objects with keys "content" and "status"
     * The key for custom messages within the storage is "custom"
     * 
     * Premade messages are stored as an object with keys as the categories
     * Each category's value is an array of objects with keys "content" and "status"
     * The key for premade messages within the storage is "premade"
     */
    
    // pre: accepts message to be added as input
    // post: message is added
    function addMessage() {
        let message = $("new_message").value;
        if (message.length > 50) {
            alert("Messages cannot be more than 50 characters!");
            return;
        }
        chrome.storage.local.get(["custom"], function(result) {
            console.log(result);
            result.custom.push({content: message, status: true});
            chrome.storage.local.set({"custom" : result.custom});
        }); // TODO Add helper function to update premade table
    }
    
    // pre: accepts message to be removed as input
    // post: message is removed
    function removeMessage(id) {
        let messages = chrome.storage.local.get("custom");
        let message = $(id).value;
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].content == message) {
                messages.splice(i, 1);
                break;
            }
        }
        chrome.storage.local.set({"custom" : messages}, refreshTable());
    }
    
    // Should we just remove this function? Seems like extra work on the HTML/JS side for little gain

    // pre: accepts a message to be edited (message1) and the new text (message2) as input
    // post: message is updated/edited
    function editMessage(id) {
        let messages = chrome.storage.local.get("custom");
        let message = $(id).value;
        let newMessage = $("edit_message").value; // should grab this from an edit message box
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].content == message) {
                messages[i] = newMessage;
                break;
            }
        }
        chrome.storage.local.set({"custom" : messages}, refreshTable());
    }
    
    // pre: a new watch threshold (1-5) to be added as input
    // post: watch threshold is updated
    function updateWatchThreshold(videos) {
        var threshold_value = document.getElementById("threshold").value;
        chrome.storage.local.set({"Threshold": threshold_value}, function() {
          console.log('Value is set to ' + value);
        });
        //TODO error handling?
        //TODO ensure storage permission enabled in extension manifest?
    }
    
    // pre: a currently existing premade message
    // post: message status is toggled
    function updatePremadeMessage(category, id) {
        // premade messages are saved in this scheme
        // array of booleans with index corresponding to id of message
        // a second array with the actual message with index corresponding to id
        let message = $(id).value;
        let toggle = $(id).checked;
        let messages = chrome.storage.local.get("premade");
        messages = messages[category];
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].content == message) {
                messages[i].status = toggle;
                break;
            }
        }
        chrome.storage.local.set({"premade" : messages});
    }

    // Category status is stored as an array of objects with keys "category" and "status"
    
    // pre: accepts a category to be toggled
    // post: category status is changed
    function updateCategory(category, id) {
        let toggle = $(id).checked;
        let categories = chrome.storage.local.get("category");
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].category == category) {
                categories[i].status = toggle;
                break;
            }
        }
        chrome.storage.local.set({"category" : categories});
    }

    function refreshTable() {
        // TODO functionality to refresh the custom table contents
        let table = $("custom_table");
        let messages = chrome.storage.local.get("custom");
        let newBody = document.createElement("tbody");
        for (var m in messages) {
            let row = newBody.insertRow();
            let cell1 = row.insertCell();
            let cell2 = row.insertCell(); // edit
            let cell3 = row.insertCell(); // remove
            cell1.innerText = m;
        }
        table.replaceChild(newBody, table.querySelector("tbody"));
    }

    /**
     * Helper function to find an element by its id
     * @param {string} id - The id of the element
     * @returns {object} - the element given by the id
     */
    function $(id) {
        return document.getElementById(id);
    }
})();

// pre: no input 
// post: return a Random message 
function getRandomMessage() {
    //TODO: Randomly select a message from all selected pools.
    let premade = chrome.storage.local.get("premade");
    let custom = chrome.storage.local.get("custom");
    let categories = chrome.storage.local.get("category");
    let allMessages = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].status == true) {
            let tempMessages = premade[categories[i].category];
            for (let j = 0; j < tempMessages.length; j++) {
                if (tempMessages[j].status == true) {
                    allMessages.push(tempMessages[j].content);
                }
            }
        }
    }
    for (let i = 0; i < custom.length; i++) {
        if (custom[i].status == true) {
            allMessages.push(custom[i].content);
        }
    }
    return allMessages[Math.floor(Math.random() * allMessages.length)];
}
  
// pre: no input 
// post: return all of the current setting as an object
function getCurrentSettingsAndData() {
    return {
        threshold: chrome.storage.local.get("threshold"),
        premadeMessages: chrome.storage.local.get("premade"),
        customMessages: chrome.storage.local.get("custom"),
        categories: chrome.storage.local.get("category")
    };
}
  
// pre: no input 
// post: returns the current watch threshold
function getThreshold() {
    return chrome.storage.local.get("threshold");
}
  
