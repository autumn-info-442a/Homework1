## How will you coordinate your work?
### Who will coordinate the work? 
Our team’s Project Manager will continue to lead coordinating how our work is assigned. During our team meetings we will discuss as a team what work needs to be done and agree on who is responsible for what. After discussing as a team we feel that having our PM lead delegating work has been successful up to this point and as a four person team we do not need an additional PM for this project.
### What will their project management practices be?
We will continue to use the Agile project management methodologies with 1 week sprints. After discussing as a team we have decided to use Github issues for the remainder of this project, instead of Trello. This was a consensus in our team as we feel Github will be a more effective tool because our repository is already hosted on Github.
### Will you have meetings? How frequently? Who plans their agendas?
In addition to class times, we will meet every Friday at 6:30pm. We can plan additional meetings outside of those times as needed but class time + Friday at 6:30pm are our set dates. The PM will plan the agendas for the team.

## What tools will you use to communicate? For each, articulate the alternatives and why that is the best choice.
We will continue to use Zoom for our team meetings
- Reliable video and screen sharing
- Sam has had issues with Discord this quarter
- We experience the least latency issues on Zoom compared to Discord

We will use Facebook Messenger to communicate outside of meetings
- Works internationally
- Everyone in the team is comfortable with it
- Reliable and available on both desktop and mobile

We will use Github Issues in order to track project milestones and issues
- Shares the same platform as where our code is hosted
- More programming specific than Trello
- Has more robust tools to work with code (i.e. raise issue on specific chunks)
- Teammates would like to learn how to use it

## Who will own components in your architecture?
- Owning them means being responsible for writing them and making sure they are functional and correct.
- For each component, list the one person who is in charge of getting it done.
    - MessageModel
        - Owner: Yichi
    - MessageView
        - Owner: Yichi
    - MonitorModel
        - Owner: Yichi
    - SettingController
        - Owner: Jimmy
    - SettingModel
        - Owner: Jimmy
        - Pre-made Messages: Spencer/Sam
        - Coding: Jimmy
    - SettingView
        - Owner: Jimmy
    - ExtensionPopup
        - Owner: Spencer
        - Sam will assist

## What is your timeline?
We will use 1 week sprints to plan a timeline for weeks 6-10. Sprints start on Mondays of each week and end on Sunday night. Specific tasks will be delegated during team meetings on Monday.
- ***Week 6 (11/9 - 11/15)***
    - Having monitorModel being able to track video count and reset it after the message is shown
    - Having monitorModel being able to talk with Message Model 
    - Display an overlay on a YouTube video
    - Set up initial settings menu
    
- ***Week 7 (11/16-11/22)***
    - Having YouTube Overlay responsive to screen size 
    - Having monitorModel being able to receive threshold update from SettingsModel
    - Add premade messages to settings
    
- ***Week 8 (11/23-11/29)***
    - Display a functional overlay with message, timer, and close button (enable after the timer is out) 
    - Add functionality to stop YouTube videos from playing
    - Have settings for custom messages
    - Have the CSS for the overlay ready
    
- ***Week 9 (11/30-12/6)***
    - Implement missing features from previous weeks
    - Fix major bugs
    
- ***Week 10 (12/7-12/11)***
    - Fix minor bugs + fine tuning
    - Upload the extension to Google Extension Store and have it ready for download

## How will you verify that you've met your requirements?
We will create two separate branches: main and development. Before inspection, all codes will be committed into development branches and ready to be reviewed by every member of the team. After Monday’s code review and revision, we’ll merge the development branch into the main branch.

**Conducting Inspections**

All of our testing will be conducted manually mainly by the developer as well as every member of the team.

**Team Verifications**

Inspections will occur Monday of each sprint at 3:30PM (PT), during our regular scheduled class meetings. All group members will visually inspect code in the development branch and the owner will verify functionality via screen-share. Additional inspection may occur during our Wednesday, Friday, or ad-hoc meetings as needed.

### General [G]:
[G1] Extension must be compatible with Chrome browsers (version 86.0.4240.111) running on Windows desktop computers
- **Verification Process:** Check if the extension can be installed in the Chrome browser on a computer using Windows OS without errors from the browser. 
- **Inspection:** If iCare extension successfully installs, we define this as meeting requirement G1
    
[G2] Extension must be responsive to all browser window sizes
- **Verification Process:** We are not testing this one as it is covered under other more specific requirements in the Visuals section
    
[G3] All text must be displayed in American English
- **Verification Process:** Check the language displayed in the home screen, settings, pre-message, warnings, and the pop up screen should be in American English
    
[G4] The font displayed will be in Arial
- **Verification Process:** Check the font displayed in the home screen, settings, pre-message, custom message, warnings, and the pop up screen should be in Arial

### Extension Pop-up [E]:
[E1] Extension icon displays in the extension toolbar on the top right corner of the browser
- **Verification Process:** Check if there is our app icon in the extension toolbar (Look at the rectangle icon with a heart in the middle (pink))

[E2] Extension icon must match the iCare logo
- **Verification Process:** After installing the iCare app, check if the extension icon matches the iCare logo

[E3] Left-clicking extension icon on the extension toolbar must open the extension’s popup window
- **Verification Process:** After left-clicking the extension icon, the pop-up will show up right under the extension icon

[E4] Extension popup must display a welcome message
- **Verification Process:** Check if when we click the iCare extension in the toolbar, the welcome message of the iCare app shows up

[E5] Extension popup must display an “about” message explaining our purpose
- **Verification Process:** When the iCare extension pop-up is open, check if the pop-up displays a message with text "Our mission is to help your children lead healthy lives with technology"

[E6] Extension popup must display a "settings" button
- **Verification Process:** When the iCare extension pop-up is open, check if the “Settings” button is displayed

[E7] Clicking the "settings" button redirects the user to a new HTML page
- **Verification Process:** After left-clicking the “Settings” button, check if the user is redirected to iCare settings HTML page

[E8] Clicking outside of the extension's popup (onto the browser window) closes it
- **Verification Process:** When the popup is shown, left-click anywhere outside the popup window and see if the pop-up disappears

### Settings [S]
All visual/interaction testing will take place on the Settings HTML page.

[S1] The settings page must display the categories of messages
- **Verification Process:** Check the settings page and see if there is a section for displaying the categories of messages “Motivational”, “Screen Time”, “Exercise”, “Custom”.

[S2] The settings page must have a section for displaying a list of custom messages 
- **Verification Process:** Check the settings page and see if there is a section for displaying all the previously entered custom messages

[S3] The settings page must display threshold settings
- **Verification Process:** Check the setting page and see if there is a section for displaying the current watch threshold and entering a new threshold

[S4] Users must be able to pick and choose pools/categories of messages
- **Verification Process:** Check the setting page and see if there is a section for checking/unchecking the categories of messages on the top right corner. Check to see if the radio buttons are clickable and responsive to inputs by selecting/deselecting “Set Messages” radio buttons. Then watch YouTube videos until a message is displayed and see if it is contained in those pools. Additionally, we can check the local storage to view the saved messages before and after.

[S5] Users must be able to see each message within a pool/category
- **Verification Process:** Open iCare settings page. Under Set Messages select “Motivational” and “Custom” (deselect all other categories). Add at least 1 custom message (i.e. “Test”). Check to ensure “Pre-Made Messages” and “Custom Messages” tables then display tables of corresponding messages.

[S6] All messages within each enabled category must be enabled by default
- **Verification Process:** After installing the extension, enable all categories of messages. Within the table of “Pre-Made Messages” check if all the messages have “show” selected.

[S7] Users must be able to enable/disable individual messages within a pool/category
- **Verification Process:** Check the setting page and see if the user can toggle (either checked or unchecked) each individual message within each category by selecting/deselecting “Show” radio button. Next, check the settings storage to see if the enabled/disabled messages list has updated to reflect the user’s changes.

[S8] There must be a minimum of one message enabled across all pools (including custom messages)
- **Verification Process:** When a user tries to disable all categories of messages, the app will not allow the user to uncheck the only categories that are enabled. At the same time, the app will show a warning message saying “Please select at least one category in “Set Messages.”

[S9] User settings must be saved when the “Save” button is pressed
- **Verification Process:** Make adjustments on the settings page such as adjusting the watch threshold and then click the “Save” button. Check local storage and see if the changes are saved.

[S10] User settings must be saved onto the Chrome extension’s local storage
- **Verification Process:** We are not testing this because it is more of an implementation decision. Unless we change our project, anything we save will have to use Chrome’s extension storage.

[S11] Alert must be displayed if/when settings fail to save
- **Verification Process:** Inspect the function that is responsible for saving the settings and verify that it contains logic to display an alert when the settings fail to properly save.

### Custom Messages [C]
All visual/interaction testing will take place on the Settings HTML page.

[C1] Users must be able to add their own custom message
- **Verification Process:** Add a custom message and then see if it shows up in the custom messages table. Additionally, check to see if the local storage contains the message.

[C2] Users must be able to add multiple custom messages
- **Verification Process:** Add multiple messages and make sure they all display in the custom messages table and show up in the local storage.

[C3] Users must be able to view their custom messages
- **Verification Process:** Add a message and make sure it displays as it was written.

[C4] Users must be able to edit their custom messages
- **Verification Process:** Edit a message and make sure the corresponding row in the table updates to reflect it (along with checking the storage).

[C5] Users must be able to remove their own custom messages
- **Verification Process:** Remove the message and make sure the custom messages table no longer shows it and verify that on the local storage it is removed.

[C6] Users must be able to set a maximum of 15 custom messages
- **Verification Process:** Add messages one at a time up to 15. Check to see if adding an additional one fails or is prevented from being added in the first place.

[C7] Users must not be able to add an empty message
- **Verification Process:** Try to add an empty message, we expect an error alert to appear. If an empty message shows up in the storage, then the requirement is not met.

[C8] A warning/alert must be displayed if the user attempts to add an empty message
- See [C7]

[C9] Custom messages must all belong to the same category
- **Verification Process:** Disable custom messages and check to see if any of the custom messages are enabled by running a function that retrieves a random message for an x number of times. If any custom messages appear, then the requirement is not met.

[C10] Custom messages must be able to be saved by clicking the “add” button
- **Verification Process:** After entering a custom message and clicking “add”, check the local storage to see if the message is contained in there.

[C11] All messages must have a character limit of 50
- **Verification Process:** Adding a message with more than 50 characters should expect an error alert. Having one not show up (and having the message show up in the storage) means the requirement is not met.

### Watch Threshold [W]:
[W1] User must be able to set the videos watched threshold for displaying a message
- **Verification Process:** Run the iCare extension, open settings window, and adjust Message Frequency dropdown to 1. Click save settings and close the iCare settings window. Exit Chrome browser and open new Chrome browser.
- **Inspection:** Open iCare extension, open settings window, and check to ensure 2 is the selected/displayed value for Message Frequency. Additionally, watch enough YouTube Kids videos to meet the threshold and prompt a message to appear. Repeat for all other Message Frequency values (2-5).

[W2] Videos watched threshold must range from 1 to 5 videos
- **Verification Process:** Run the iCare extension and open settings window. Click Message Frequency dropdown.
- **Inspection:** Check to ensure dropdown values range from 1-5 (integer).

## Messages
**General Verification Process:** Run iCare extension (save settings: Set Messages = Motivational, Message Frequency = 2, Add Custom Message = “Test” ), watch Youtubekids.com videos until an iCare message is displayed.
