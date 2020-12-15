# Project Requirements

## General [G]
- [G1] **COMPLETE** Extension must be compatible with Chrome browsers (version 86.0.4240.111) running on Windows desktop computers
- [G2] **COMPLETE** Extension must be responsive to all browser window sizes
- [G3] **COMPLETE** All text must be displayed in American English
- [G4] **COMPLETE** The font displayed will be in Arial

## Extension Pop-up [E]
- [E1] **COMPLETE** Extension icon displays in the extension toolbar on the top right corner of the browser
- [E2] **COMPLETE** Extension icon must match the iCare logo
- [E3] **COMPLETE** Left-clicking extension icon on the extension toolbar must open the extension’s popup window 
- [E4] **COMPLETE** Extension popup must display a welcome message
- [E5] **COMPLETE** Extension popup must display an “about” message explaining our purpose 
- [E6] **COMPLETE** Extension popup must display a "settings" button
- [E7] **COMPLETE** Clicking the "settings" button redirects the user to a new HTML page
- [E8] **COMPLETE** Clicking outside of the extension's popup (onto the browser window) closes it

## Settings [S]
- [S1] **COMPLETE** The settings page must display the categories of messages
- [S2] **COMPLETE** The settings page must display a list of custom messages
- [S3] **COMPLETE** The settings page must display threshold (aka frequency) settings
- [S4] **COMPLETE** Users must be able to pick and choose pools/categories of messages
- [S5] **COMPLETE** Users must be able to see each message within a pool/category
- [S6] **COMPLETE** All messages within each enabled category must be enabled by default
- [S7] **COMPLETE** Users must be able to enable/disable individual messages within a pool/category
- [S8] **REVISED** There must be a minimum of one message enabled across all pools (including custom messages)
       _Justification_: We decided not to count custom messages just for the case when no custom messages exist. Effectively this means that there must be one premade message enabled at all times.
- [S9] ~~User settings must be saved when the “Save” button is pressed~~  
- [S9] **REVISED**: User settings must be automatically saved any time user interacts with settings page (clicks on any button)\
       _Justification_: We opt to automatically save user settings to reduce potential issues with a user forgetting to click save. The user will see text at the top of the             Settings page explaining that all settings will automatically be displayed. This also adds protections on the back end to ensure we are always saving the most                   current user settings (proactively avoiding non-save errors).
- [S10] **COMPLETE** User settings must be saved onto the Chrome extension’s local storage
- [S11] ~~Alert must be displayed if/when settings fail to save~~
- [S11] **REMOVED**\
       _Justification_: Based on the revision of S9, we no longer place the burden of saving on the user (save button is removed). Therefore we do not feel it is necessary to 
        include this requirement as our revised S9 elminates the possibility of the user not saving.

### Custom Messages [C]
- [C1] **COMPLETE** Users must be able to add their own custom message
- [C2] **COMPLETE** Users must be able to add multiple custom messages
- [C3] **COMPLETE** Users must be able to view their custom messages
- [C4] **COMPLETE** Users must be able to edit their custom messages
- [C5] **COMPLETE** Users must be able to remove their own custom messages
- [C6] **COMPLETE** Users must be able to set a maximum of 15 custom messages
- [C7] **COMPLETE** Users must not be able to add an empty message
- [C8] **COMPLETE** A warning/alert must be displayed if the user attempts to add an empty message
- [C9] **COMPLETE** Custom messages must all belong to the same category
- [C10] **COMPLETE** Custom messages must be able to be saved by clicking the “add” button
- [C11] **COMPLETE** All messages must have a character limit of 50

### Watch Threshold [W]
- [W1] **COMPLETE** User must be able to set the videos watched threshold to display a message
- [W2] **COMPLETE** Videos watched threshold must range from 1 to 5 videos

## Messages

### Visual [V]
- [V1] **COMPLETE** Messages must overlay on top of the video in standard view
- [V2] **IMPOSSIBLE** Messages must overlay on top of the video in full screen view
       _Justification_: The way we generate the overlay is by copying the dimensions of the video player when it is active. However, injecting the overlay causes the player to exit out of fullscreen every time. We have not found a way to force YouTube to stay in fullscreen.
- [V3] **COMPLETE** The extension tracks total videos watched since the last message was displayed
- [V4] **COMPLETE** The message must be centered on the overlay
- [V5] **COMPLETE** The size of the overlay must cover the entire YouTube video
- [V6] **COMPLETE** The overlay must resize itself when the size of the YouTube player changes
- [V7] **COMPLETE** There must be a timer displaying the time remaining (in seconds) on the message overlay
- [V8] **COMPLETE** The timer displayed must be counting down towards zero
- [V9] **COMPLETE** The close button visually must show clear indication about its state (either clickable or unclickable) 

### Functionality [F]
- [F1] **COMPLETE** Each message and overlay must have a time duration of 15 seconds.
- [F2] ~~iCare message overlay must show up after user exceeds the video count threshold that was saved in the settings~~
- [F2] **REVISED** iCare message overlay must show up after user meets the video count threshold that was saved in the settings
       _Justification_: We changed it so that the overlay pops up after the user meets the threshold because we thought it makes more sense from a usability standpoint.
- [F3] **COMPLETE** The videos watched threshold must reset after the overlay is activated
- [F4] **COMPLETE** The overlay must pause the currently playing video
- [F5] **COMPLETE** User must be unable to play/unpause a video while the overlay is active
- [F6] **COMPLETE** Refreshing the browser removes the current instance of the iCare overlay
- [F7] **COMPLETE** When the overlay shows up, it will randomly pick one of the messages from all the message pools selected in the settings
- [F8] **COMPLETE** The randomly chosen message must be displayed on the overlay
- [F9] **COMPLETE** The “close” button must be disabled until the timer reaches zero
- [F10] **COMPLETE** After the timer reaches zero, the user must be able to close the overlay
