# Project Requirements

## General
- Extension must be compatible with up to date Chrome browsers on desktop computers
- Extension must be responsive to all browser window sizes
- All text must be displayed in American English
- The font displayed will be in Arial

## Extension Pop-up
- Extension icon displays in the extension toolbar on the top right corner of the browser- 
- Extension icon is correctly matches the iCare logo
- Left-clicking extension icon on the extension toolbar opens the extension’s popup window 
- Extension popup displays welcome message
- Extension popup displays an “about” message explaining our purpose 
- Users can find the extension setting by right-clicking the pop-up icon and clicking the “option” item from the menu shown. 
- Clicking the extension settings option redirect the user to a new HTML page

## Settings
- The settings page displays the pools/categories of messages
- The settings page displays a table of custom messages
- The settings page displays threshold settings
- Each message has a time duration associated with it ranging from 5 seconds to 5 minutes
- User is able to pick and choose pools/categories of messages
- User is able to see each message within a pool/category
- User is able to enable/disable individual messages within a pool/category
- There must be a minimum of one message enabled across all pools (including custom messages)

### Custom Messages
- User is able to add their own custom message
- User is able to add a time duration to their own custom message
- User can add multiple custom messages
- User can view their custom messages
- User can edit their custom messages
- User can remove their own custom messages
- User can set an unlimited amount of custom messages
- User cannot add an empty message
- A warning/alert is displayed if the user attempts to add an empty message
- Custom messages all belong to the same pool/category
- Custom messages without a time duration set default to 15 seconds
- All messages have a character limit of 50

### Watch Threshold
- User can set the videos watched threshold to display a message
- Videos watched threshold ranges from 1 to 5 videos
- Custom message is saved by click the “save” button
- User settings are saved when the “save” button is pressed 
- Clicking off the extension’s popup closes it
- User settings are saved onto the Chrome extension’s local storage
- Alert is displayed if/when settings fail to save

## Messages

### Visual
- Messages must overlay on top of the video in standard view
- Messages must overlay on top of the video in full screen view
- The extension tracks total videos watched since the last message was displayed
- iCare message is displayed on an overlay on top of the YouTube video
- The message is centered on the overlay
- The size of the overlay covers the entire YouTube video
- The overlay can adjust based on the size of the browser
- A timer displays the time remaining (in seconds) on the message overlay
- The timer displayed is counting down towards zero

### Functionality
- iCare message overlay will show up after user exceeds the video count threshold that was saved in the settings
- The videos watched threshold will reset after the overlay is activated
- The overlay will pause the currently playing video
- User is unable to play/unpause a video while the overlay is active
- Refreshing the browser removes the current instance of the iCare overlay
- When the overlay shows up, it will randomly pick one of the messages from all the message pools selected in the settings
- The randomly chosen message is displayed on the overlay
- The overlay will show up for an amount of time as determined in the settings
- The “close” button is disabled until the timer reaches zero
- After the timer is over, the user can close the overlay
