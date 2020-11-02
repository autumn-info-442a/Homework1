# Description of all components:

## MonitorModel
- This is a component that tracks how many YouTube videos the user has watched and checks to see if the “videos watched” threshold has been met.
- This model resides on the client.
- The MonitorModel can communicate with the MessageModel
The MessageModel can tell the MonitorModel that a message has finished displaying (therefore the “videos watched” count needs to be set to zero)
- The MonitorModel can communicate with the SettingsModel
The SettingsModel can notify the MonitorModel with a change to the “videos watched” threshold
