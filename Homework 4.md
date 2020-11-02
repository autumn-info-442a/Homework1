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
