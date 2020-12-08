(function() {
    "use strict";

    
    window.addEventListener("load", initialize);

    function initialize() {
        chrome.storage.local.get(function(result) {
            console.log(result);
        });
        displaySettings();
        $("add").addEventListener("click", addMessage);
        $("threshold").addEventListener("change", updateWatchThreshold);
        let checkboxes = document.querySelectorAll("#categories input");
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("change", function() {
                updateCategory(checkboxes[i].id);
            });
        }
    }

    // pre: no inputs
    // post: all settings are displayed
    function displaySettings() {
        displayThreshold();
        displayCategory();
        refreshTable();
        displayPremade();
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
        if (message.length == 0) {
            alert("Messages cannot be empty!");
            return;
        }
        chrome.storage.local.get("custom", function(result) {
            if (result.custom.length > 15) {
                alert("Cannot add more than 15 messages!");
                return;
            }
            result.custom.push({content: message, status: true});
            chrome.storage.local.set({"custom" : result.custom});
            $("new_message").value = "";
            refreshTable();
        });
    }
    
    // pre: accepts message to be removed as input
    // post: message is removed
    function removeMessage(id) {
        console.log("removing message");
        chrome.storage.local.get("custom", function(result) { // shouldn't ever be called without a message existing
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
        chrome.storage.local.get("custom", function(result) { // shouldn't ever be called without a message existing
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
        chrome.storage.local.set({"threshold": $("threshold").value});
    }
    
    // pre: a currently existing premade message
    // post: message status is toggled
    function updatePremadeMessage(category, message_id, box_id) {
        let message = $(message_id).value;
        let toggle = box_id.checked;
        chrome.storage.local.get("premade", function(result) {
            console.log(result);
            let messages = result.premade[category];
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].content == message) {
                    messages[i].status = toggle;
                    checkIfMessageRemains().then(function(result) {
                        if (!result && !toggle) {
                            alert("Cannot have less than 1 message enabled");
                            box_id.checked = true;
                            messages[i].status = !toggle;
                            return;
                        } else {
                            chrome.storage.local.set({"premade" : result.premade}, function() {
                                console.log("done changing message " + message + " to " + toggle);
                            });
                        }
                    });
                }
            }
            console.log(result);
        });
    }

    // Category status is stored as an array of objects with keys "category" and "status"
    
    // pre: accepts a category to be toggled
    // post: category status is changed
    function updateCategory(id) {
        let toggle = $(id).checked;
        chrome.storage.local.get("category", function(result) {
            let categories = result.category;
            console.log(categories);
            let enabled = 0;
            for (let i = 0; i < categories.length; i++) {
                if (categories[i].status && categories[i].category != "custom") {
                    enabled++;
                }
            }
            if (enabled <= 1 && !toggle) {
                $(id).checked = true;
                alert("Cannot have less than one category other than custom enabled!");
                return;
            }
            for (let i = 0; i < categories.length; i++) {
                if (categories[i].category == $(id).value) {
                    categories[i].status = toggle;
                    break;
                }
            }
            console.log(categories);
            chrome.storage.local.set({"category" : categories});
        });
    }

    function displayThreshold() {
        chrome.storage.local.get("threshold", function(result) {
            $("threshold").value = result.threshold;
        });
    }

    function displayCategory() {
        chrome.storage.local.get("category", function(result) {
            let categories = result.category;
            for (let i = 0; i < categories.length; i++) {
                let category = categories[i];
                $(category.category).checked = category.status;
            }
        });
    }

    function displayPremade() {
        let table = $("premade_table");
        chrome.storage.local.get("premade", function(result) {
            let newBody = document.createElement("tbody");
            let messages = result.premade;
            let categories = Object.keys(messages);
            for (let i = 0; i < categories.length; i++) {
                let cat = newBody.insertRow();
                let cell = cat.insertCell();
                cat.value = categories[i];
                cat.classList.add("category_header");
                switch (categories[i]) {
                    case "motivational":
                        cell.innerHTML = "Motivational";
                        break;
                    case "exercise":
                        cell.innerHTML = "Exercise";
                        break;
                    case "screentime":
                        cell.innerHTML = "Screen Time";
                        break;
                    default:
                        break;
                }
                for (let j = 0; j < messages[categories[i]].length; j++) {
                    let m = messages[categories[i]][j].content;
                    let row = newBody.insertRow();
                    row.id = categories[i] + " " + j;
                    row.value = m;
                    let cell1 = row.insertCell(); // message
                    let cell2 = row.insertCell(); // "show" checkbox
                    cell1.innerHTML = m;
                    let show = document.createElement("input");
                    show.setAttribute("type", "checkbox");
                    show.checked = messages[categories[i]][j].status;
                    show.addEventListener("click", function() {
                        updatePremadeMessage(categories[i], row.id, this);
                    });
                    cell2.appendChild(show);
                }
            }
            table.replaceChild(newBody, table.querySelector("tbody"));
        });
    }

    function refreshTable() {
        let table = $("custom_table");
        chrome.storage.local.get({custom: []}, function(result) {
            let newBody = document.createElement("tbody");
            let messages = result.custom;
            for (let i = 0; i < messages.length; i++) {
                let m = messages[i].content;
                let row = newBody.insertRow();
                row.id = "custom " + i;
                row.value = m;
                let cell1 = row.insertCell(); // message
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
            }
            table.replaceChild(newBody, table.querySelector("tbody"));
        });
    }

    function checkIfMessageRemains() {
        return new Promise(resolve => {
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
                resolve(allMessages.length > 1);
            });
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

  
