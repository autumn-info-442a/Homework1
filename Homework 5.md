## How will you coordinate your work?
### Who will coordinate the work? 
Our team’s Project Manager will continue to lead coordinating how our work is assigned. During our team meetings we will discuss as a team what work needs to be done and agree on who is responsible for what. After discussing as a team we feel that having our PM lead delegating work has been successful up to this point and as a four person team we do not need an additional PM for this project.
### What will their project management practices be?
We will continue to use the Agile project management methodologies with 1 week sprints. After discussing as a team we have decided to use Github issues for the remainder of this project, instead of Trello. This was a consensus in our team as we feel Github will be a more effective tool because our repository is already hosted on Github.
### Will you have meetings? How frequently? Who plans their agendas?
In addition to class times, we will meet every Friday at 6:30pm. We can plan additional meetings outside of those times as needed but class time + Friday at 6:30pm are our set dates. The PM will plan the agendas for the team.

## What tools will you use to communicate? For each, articulate the alternatives and why that is the best choice.
We will continue to use Zoom for our team meetings.
- Reliable video and screen sharing
- Sam has had issues with Discord this quarter
- We experience the least latency issues on Zoom compared to Discord

We will use Facebook Messenger to communicate outside of meetings.
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
- Week 6 (11/9 - 11/15)
    - Having monitorModel being able to track video count and reset it after the message is shown
    - Having monitorModel being able to talk with Message Model 
    - Display an overlay on a YouTube video
    - Set up initial settings menu
    
- Week 7 (11/16-11/22)
    - Having YouTube Overlay responsive to screen size 
    - Having monitorModel being able to receive threshold update from SettingsModel
    - Add premade messages to settings
    
- Week 8 (11/23-11/29)
    - Display a functional overlay with message, timer, and close button (enable after the timer is out) 
    - Add functionality to stop YouTube videos from playing
    - Have settings for custom messages
    - Have the CSS for the overlay ready
    
- Week 9 (11/30-12/6)
    - Implement missing features from previous weeks
    - Fix major bugs
    
- Week 10 (12/7-12/11)
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
    - Verification Process: Check if the extension can be installed in the Chrome browser on a computer using Windows OS without errors from the browser. 
    - Inspection: If iCare extension successfully installs, we define this as meeting requirement G1.
[G2] Extension must be responsive to all browser window sizes
    - Verification Process: We are not testing this one as it is covered under other more specific requirements in the Visuals section.
[G3] All text must be displayed in American English
    - Verification Process: Check the language displayed in the home screen, settings, pre-message, warnings, and the pop up screen should be in American English.
[G4] The font displayed will be in Arial
    - Verification Process: Check the font displayed in the home screen, settings, pre-message, custom message, warnings, and the pop up screen should be in Arial.
