# Description of all components:

### All components reside on the client unless otherwise specified

## MonitorController
- This is a component that tracks how many YouTube videos the user has watched and checks to see if the “videos watched” threshold has been met
- The ***MonitorController*** can communicate with the ***SettingsController***
    - The ***SettingsController*** can tell the ***MonitorController*** what is the current videos watched threshold

## SettingsModel
- This is a component that stores all the messages (pre-made and custom messages) and settings. The setting data includes:
    - Type of message displayed
    - Video watched threshold 
- All of the data stored is contained locally on the browser
- The ***SettingController*** can communicate with the ***SettingsModel***
    - The ***SettingsController*** can ask the ***SettingsModel*** for all of the current settings and data (selected message categories, watch time threshold, and all premade/custom messages)
    - The ***SettingsController*** can notify the ***SettingsModel*** that there is an update in the messages categories that will shown up
    - The ***SettingsController*** can notify the ***SettingsModel*** that there is an update in the message frequency that will shown up
    - The ***SettingsController*** can send to the ***SettingsModel*** an addition to the custom messages
    - The ***SettingsController*** can notify the ***SettingsModel*** that there is a removal in the custom messages
    - The ***SettingsController*** can notify the ***SettingsModel*** that there is an update to a custom message

## MessageController
- This is a component that picks a random message to display and tracks the amount of time left for that message
- The ***MessageController*** can communicate with the ***MonitorController***
    - The ***MonitorController*** will notify the ***MessageController*** if the “videos watched” threshold has been met
- The ***MessageController*** can communicate with the ***SettingsController***
    - The ***SettingsController*** can provide the ***MessageController*** with a random message
- The ***MessageView*** can communicate with the ***MessageController***
    - The ***MessageController*** can notify the ***MessageView*** to display itself with appropriate settings

## MessageView
- This component functions as a display for a randomly selected message and time remaining
    
## SettingsController
- This component allows the user to input the desired message pool, video watched threshold, and custom message
- This component is responsible for handling all logic that will be displayed on SettingsView
- The ***SettingsController*** communicates with the ***SettingsModel***
    - The ***SettingsModel*** sends the ***SettingsController*** all of the current settings and data (selected message categories, watch time threshold, and all premade/custom messages)
- The ***SettingsView*** communicates with the ***SettingsController***
    - The ***SettingsController*** can notify the ***SettingsView*** to display itself with appropriate settings

## SettingsView
- This is a component that displays all of the user settings and premade/custom messages. The user is also able to adjust their settings on this view

