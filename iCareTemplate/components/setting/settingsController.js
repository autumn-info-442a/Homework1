(function() {
    "use strict";

    window.addEventListener("load", initialize);

    function initialize() {
        $("add").addEventListener("click", addMessage);
        chrome.storage.local.clear(); // FOR TESTING PURPOSES ONLY
        // Add more event listeners
        chrome.storage.local.set({"custom": []}); // purely for testing, remove later
    }

    // pre: no inputs
    // post: all settings are displayed
    function displaySettings() {
        refreshTable();
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
        chrome.storage.local.get("custom", function(result) {
            if (result.custom.length >= 15) {
                alert("Cannot add more than 15 messages!");
                return;
            }
            result.custom.push({content: message, status: true});
            chrome.storage.local.set({"custom" : result.custom});
            $("new_message").value = "";
            refreshTable();
        }); // TODO Add helper function to update premade table
    }
    
    // pre: accepts message to be removed as input
    // post: message is removed
    function removeMessage(id) {
        console.log("removing message");
        chrome.storage.local.get("custom", function(result) {
            let message = $(id).value;
            console.log("message is " + message);
            let messages = result.custom;
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].content == message) {
                    messages.splice(i, 1);
                    break;
                }
            }
            chrome.storage.local.set({"custom" : messages});
            $("edit_message").innerText = "";
            $("edit_message").classList.add("edit_hidden");
            $("edit").classList.add("edit_hidden");
            $("edit").outerHTML = $("edit").outerHTML; // should remove all event listeners
            refreshTable();
        });
    }
    
    // pre: accepts a message to be edited (message1) and the new text (message2) as input
    // post: message is updated/edited
    function editMessage(id) {
        chrome.storage.local.get("custom", function(result) {
            let message = $(id).value;
            let messages = result.custom;
            let newMessage = $("edit_message").value;
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].content == message) {
                    messages[i].content = newMessage;
                    break;
                }
            }
            chrome.storage.local.set({"custom" : messages});
            $("edit_message").value = "";
            $("edit_message").classList.add("edit_hidden");
            $("edit").classList.add("edit_hidden");
            $("edit").outerHTML = $("edit").outerHTML; // should remove all event listeners
            refreshTable();
        });
    }
    
    // pre: a new watch threshold (1-5) to be added as input
    // post: watch threshold is updated
    function updateWatchThreshold() {
        chrome.storage.local.set({"Threshold": $("threshold").value});
    }
    
    // pre: a currently existing premade message
    // post: message status is toggled
    function updatePremadeMessage(category, id) {
        // premade messages are saved in this scheme
        // array of booleans with index corresponding to id of message
        // a second array with the actual message with index corresponding to id
        let message = $(id).value;
        let toggle = $(id).checked;
        chrome.storage.local.get("premade", function(result) {
            let messages = result.premade[category];
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].content == message) {
                    messages[i].status = toggle;
                    break;
                }
            }
            chrome.storage.local.set({"premade" : messages});
        });
    }

    // Category status is stored as an array of objects with keys "category" and "status"
    
    // pre: accepts a category to be toggled
    // post: category status is changed
    function updateCategory(category, id) {
        let toggle = $(id).checked;
        chrome.storage.local.get("category", function(result) {
            let categories = result.category;
            for (let i = 0; i < categories.length; i++) {
                if (categories[i].category == category) {
                    categories[i].status = toggle;
                    break;
                }
            }
            chrome.storage.local.set({"category" : categories});
        });
    }

    function refreshTable() {
        // TODO functionality to refresh the custom table contents
        let table = $("custom_table");
        console.log("refreshing the table!");
        chrome.storage.local.get("custom", function(result) {
            let newBody = document.createElement("tbody");
            let messages = result.custom;
            console.log(messages);
            for (let i = 0; i < messages.length; i++) {
                let m = messages[i].content;
                let row = newBody.insertRow();
                row.id = "custom " + i;
                row.value = m;
                let cell1 = row.insertCell();
                let cell2 = row.insertCell(); // edit
                let cell3 = row.insertCell(); // remove
                cell1.innerText = m;
                let edit = document.createElement("input");
                edit.setAttribute("type", "button");
                edit.setAttribute("value", "Edit");
                edit.addEventListener("click", function() {
                    $("edit_message").classList.remove("edit_hidden");
                    $("edit").classList.remove("edit_hidden");
                    $("edit").addEventListener("click", function() {
                        editMessage(row.id);
                    });
                });
                cell2.appendChild(edit);
                let remove = document.createElement("input");
                remove.setAttribute("type", "button");
                remove.setAttribute("value", "Remove");
                remove.addEventListener("click", function() {
                    removeMessage(row.id);
                });
                cell3.appendChild(remove);
                console.log("adding " + m);
            }
            table.replaceChild(newBody, table.querySelector("tbody"));
        });
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
    chrome.storage.local.set({"premade": []});
    chrome.storage.local.set({"category": []});
    chrome.storage.local.get(["premade", "custom", "category"], function(result) {
        let premade = result.premade;
        let custom = result.custom;
        let categories = result.category;
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
    });
}
  
// pre: no input 
// post: return all of the current setting as an object
function getCurrentSettingsAndData() {
    chrome.storage.local.get(["threshold", "premade", "custom", "category"], function(result) {
        return {
            watchThreshold: result.threshold,
            premadeMessages: result.premade,
            customMessages: result.custom,
            categoryStatus: result.category
        }
    });
}
  
// pre: no input 
// post: returns the current watch threshold
function getThreshold() {
    chrome.storage.local.get("threshold", function(result) {
        return result.threshold;
    });
}
  
