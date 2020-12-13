# Project Requirements

## General [G]
- [G1] Extension must be compatible with Chrome browsers (version 86.0.4240.111) running on Windows desktop computers
- [G2] Extension must be responsive to all browser window sizes
- [G3] All text must be displayed in American English
- [G4] The font displayed will be in Arial

## Extension Pop-up [E]
- [E1] Extension icon displays in the extension toolbar on the top right corner of the browser
- [E2] Extension icon must match the iCare logo
- [E3] Left-clicking extension icon on the extension toolbar must open the extension’s popup window 
- [E4] Extension popup must display a welcome message
- [E5] Extension popup must display an “about” message explaining our purpose 
- [E6] Extension popup must display a "settings" button
- [E7] Clicking the "settings" button redirects the user to a new HTML page
- [E8] Clicking outside of the extension's popup (onto the browser window) closes it

## Settings [S]
- [S1] The settings page must display the categories of messages
- [S2] The settings page must display a list of custom messages
- [S3] The settings page must display threshold settings
- [S4] Users must be able to pick and choose pools/categories of messages
- [S5] Users must be able to see each message within a pool/category
- [S6] All messages within each enabled category must be enabled by default
- [S7] Users must be able to enable/disable individual messages within a pool/category
- [S8] There must be a minimum of one message enabled across all pools (including custom messages)
- [S9] ~~User settings must be saved when the “Save” button is pressed~~
- [S9] **REVISED**: User settings must be automatically saved any time user interacts with settings page (clicks on any button
       _Justification_: We opt to automatically save user settings to reduce potential issues with a user forgetting to click save. The user will see text at the top of the             Settings page explaining that all settings will automatically be displayed. This also adds protections on the back end to ensure we are always saving the most                   current user settings (proactively avoiding non-save errors).
- [S10] User settings must be saved onto the Chrome extension’s local storage
- [S11] ~~Alert must be displayed if/when settings fail to save~~
- [S11] **REMOVED**
       _Justification_: Based on the revision of S9, we no longer place the burden of saving on the user (save button is removed). Therefore we do not feel it is necessary to 
        include this requirement as our revised S9 elminates the possibility of the user not saving.

### Custom Messages [C]
- [C1] Users must be able to add their own custom message
- [C2] Users must be able to add multiple custom messages
- [C3] Users must be able to view their custom messages
- [C4] Users must be able to edit their custom messages
- [C5] Users must be able to remove their own custom messages
- [C6] Users must be able to set a maximum of 15 custom messages
- [C7] Users must not be able to add an empty message
- [C8] A warning/alert must be displayed if the user attempts to add an empty message
- [C9] Custom messages must all belong to the same category
- [C10] Custom messages must be able to be saved by clicking the “add” button
- [C11] All messages must have a character limit of 50

### Watch Threshold [W]
- [W1] User must be able to set the videos watched threshold to display a message
- [W2] Videos watched threshold must range from 1 to 5 videos

## Messages

### Visual [V]
- [V1] Messages must overlay on top of the video in standard view
- [V2] Messages must overlay on top of the video in full screen view
- [V3] The extension tracks total videos watched since the last message was displayed
- [V4] The message must be centered on the overlay
- [V5] The size of the overlay must cover the entire YouTube video
- [V6] The overlay must resize itself when the size of the YouTube player changes
- [V7] There must be a timer displaying the time remaining (in seconds) on the message overlay
- [V8] The timer displayed must be counting down towards zero
- [V9] The close button visually must show clear indication about its state (either clickable or unclickable) 

### Functionality [F]
- [F1] Each message and overlay must have a time duration of 15 seconds.
- [F2] iCare message overlay must show up after user exceeds the video count threshold that was saved in the settings
- [F3] The videos watched threshold must reset after the overlay is activated
- [F4] The overlay must pause the currently playing video
- [F5] User must be unable to play/unpause a video while the overlay is active
- [F6] Refreshing the browser removes the current instance of the iCare overlay
- [F7] When the overlay shows up, it will randomly pick one of the messages from all the message pools selected in the settings
- [F8] The randomly chosen message must be displayed on the overlay
- [F9] The “close” button must be disabled until the timer reaches zero
- [F10] After the timer reaches zero, the user must be able to close the overlay
