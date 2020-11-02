# Description of all components:

## MonitorModel
- This is a component that tracks how many YouTube videos the user has watched and checks to see if the “videos watched” threshold has been met.
- This model resides on the client.
- The ***MonitorModel*** can communicate with the ***MessageModel***
    - The ***MessageModel*** can tell the ***MonitorModel*** that a message has finished displaying (therefore the “videos watched” count needs to be set to zero)
- The ***MonitorModel*** can communicate with the ***SettingsModel***
    - The ***SettingsModel*** can notify the ***MonitorModel*** with a change to the “videos watched” threshold

## SettingsModel
- This is a component that stores all the messages (pre-made and custom messages) and settings. The setting data includes.
    - Type of message displayed
    - Video watched threshold 
- The ***SettingsModel*** can communicate with the ***MonitorModel***
    - The ***SettingsModel*** can notify the ***MonitorModel*** about changes in the watching threshold.
- The ***MessageModel*** can communicate with the ***SettingsModel***
    - The ***MessageModel*** will ask ***SettingsModel*** for a random message from all the selected pools combined.
- The ***SettingController*** can communicate with the ***SettingsModel***
    - The ***SettingsController*** can ask the ***SettingsModel*** for all of the current settings and data (selected message categories, watch time threshold, and all premade/custom messages)
    - The ***SettingsController*** can notify the ***SettingsModel*** that there is an update in the messages categories that will shown up
    - The ***SettingsController*** can notify the ***SettingsModel*** that there is an update in the message frequency that will shown up
    - The ***SettingsController*** can send to the ***SettingsModel*** an addition to the custom messages
    - The ***SettingsController*** can notify the ***SettingsModel*** that there is a removal in the custom messages
    - The ***SettingsController*** can notify the ***SettingsModel*** that there is an update to a custom message.

## MessageModel
- This is a component that picks a random message to display and tracks the amount of time left for that message.
- The ***MessageModel*** can communicate with the ***MonitorModel***
    - The ***MonitorModel*** will notify the ***MessageModel*** if the “videos watched” threshold has been met
- The ***MessageModel*** can communicate with the ***SettingsModel***
    - The ***SettingsModel*** can provide the ***MessageModel*** with a random message

## MessageView
- This component functions as a display for a randomly selected message and time remaining.
- The ***MessageView*** can communicate with the ***MessageModel***
    - The ***MessageModel*** can provide the ***MessageView*** with a random message to display
    - The ***MessageModel*** can provide the ***MessageView*** with the time remaining
    
## SettingsController
- This component allows the user to input the desired message pool, video watched threshold, and custom message. 
- The ***SettingsController*** communicates with the ***SettingsModel***
    - The ***SettingsModel*** sends the ***SettingsController*** all of the current settings and data (selected message categories, watch time threshold, and all premade/custom messages)
- The ***SettingsController*** communicates with the ***SettingsView***
    - The ***SettingsView*** sends the ***SettingsController*** a new custom message if one has been added
    - The ***SettingsView*** notifies the ***SettingsController*** if a custom message has been removed and which one
    - The ***SettingsView*** notifies the ***SettingsController*** if a custom message has been edited and which one (along with the new edited message)
    - The ***SettingsView*** notifies the ***SettingsController*** if the “videos watched” threshold has been changed
    - The ***SettingsView*** notifies the ***SettingsController*** if a premade message has been enabled/disabled
    - The ***SettingsView*** notifies the ***SettingsController*** if a category has been enabled/disabled

## SettingsView
- This is a component that displays all of the user settings and premade/custom messages. The user is also able to adjust their settings on this view.
- The ***SettingsView*** communicates with the ***SettingsController***
    - The ***SettingsController*** sends the ***SettingsView*** the message category settings
    - The ***SettingsController*** sends the ***SettingsView*** a list of custom messages
    - The ***SettingsController*** sends the ***SettingsView*** a list of premade messages and their status
    - The ***SettingsController*** sends the ***SettingsView*** the current “videos watched” threshold
