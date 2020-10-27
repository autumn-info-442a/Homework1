_INFO 442A: Samuel Christ, Jimmy Hua, Yichi Zhang, Spencer Knapp_

# Homework 2: Design

## Problem

In the United States, 60% of parents use YouTube as a tool for babysitting their children aged 7-13 on at least a biweekly basis [(Kessel, Smith, Toor)](https://www.pewresearch.org/internet/2018/11/07/many-turn-to-youtube-for-childrens-content-news-how-to-lessons/). This exposure is often unregulated, which poses risks of “binging” on content for extended periods of time. Research suggests that habitual consumption of YouTube content may lead to addiction and other psychological issues [(Campbell, Twenge](https://www.sciencedirect.com/science/article/pii/S2211335518301827), [Domoff)](https://news.umich.edu/kids-and-screen-time-signs-your-child-might-be-addicted/). YouTube Kids is an existing solution to some of these risks by removing comments and restricting videos shown. This approach to YouTube addiction is not effective because YouTube has a financial stake in designing its algorithm to promote high watch times to earn more revenue from ads. Parents have the option to remove all ads by purchasing YouTube Premium, which still fails to directly address the issues of YouTube addiction and self-regulation of watch time. In light of these risks associated with YouTube, what balance of parent intervention and platform moderation best promotes child safety and self regulation?  

## Solution
We are building a Chrome extension where children watching Youtube Kids receive positive messages in between videos. Messages will be selected from pre-made categories and user-entered custom messages (max 50 characters). Parents/guardians can control the frequency of message occurrances (as a pop-up displayed directly after a video ends) by specifying controls in the iCare settings page. A parent can also edit, or remove any custom or pre-made message in the settings page. The messages displayed to a child watching Youtube Kids will be randomly selected from the pool of messages specified by the parent in the settings page (saved locally). By default, the "Motivational" category of pre-made messages is selected.

The interface behaves as a typical Chrome extension, found in the extension toolbar. The pop-up screen displays after the user clicks on the iCare extension button.
<p align="center">
  <img width="460" height="200" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_a.jpg">
</p>

Clicking on settings button redirects user to iCare settings web page.
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_b.JPG">
</p>
In settings there are:

* **Set Messages** 
  - 2 Radio buttons for pre-made messages in "Motivational" or "Screen Time" categories, user can select multiple categories (these radio buttons allow for **multiple*    
    selections)
  - 1 Textbox for user to type a custom message (50 characters max), clicking add button saves locally
  
* **Message Frequency** 
  - Dropdown 1: # of Videos (int 1-5)
  - Dropdown 2: Duration of Message (int 5-30, multiples of 5 only)
 
* **Pre-Made Messages** 
  - Displays messages based on which radio buttons are selected in **Set Messages**
  - User can enable or disable messages by clicking on "Enable" or "Disable" radio buttons next to each message (these radio buttons allow for **one** selection, not both)
  
* **Custom Messages** 
  - Displays messages based on saved custom messages entered in **Set Messages**
  - User can edit message by clicking on pencil icon, or delete from message pool by clicking on x icon
  
  
When the Save button is clicked, settings data for all user inputs will be saved locally (pre-made and custom messages, # of videos, duration of message) and page closes. While user watches videos on Youtube Kids, the iCare extension tracks total video count based on settings.

<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/main/2.JPG">
</p>

If user attempts to add a custom message without any characters an alert message is displayed as a pop-up prompting user to add text in the "Custom Message" box.

<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/main/3.JPG">
</p>

If user attempts to exit iCare settings page without clicking "Save All Settings" an alert message is displayed as a pop-up prompting user to save (settings are then stored locally).

<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/main/4.JPG">
</p>

Youtube Kids functions normally until the _# of Videos_ counted by iCare exceeds the user-specified _# of Videos_ (based on saved settings).
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_d.JPG">
</p>

When user has exceeded the _# of Videos_ counted by iCare exceeds the user-specified _# of Videos_ setting a message is displayed as a pop-up over the Youtube Kids video. The message will be randomly selected from any enabled pre-made message(s) or custom message(s) saved by user.

**All messages will display for 15 seconds**. The timer will count down from 15-0, when 15 seconds have elasped the "Close" button will become enabled for user to click.
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/design/5.JPG">
</p>
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/design/6.JPG">
</p>

iCare message pop-up closes when user clicks on the "Close" text button. Youtube Kids returns to normal functionality until next message is triggered (based on _# of Videos_ watched exceeding settings).

<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_i.JPG">
</p>


## Additional Notes:
For this iteration of iCare, all text will be in American English. There will be no sound, no keyboard user inputs (all user inputs will be click based), and no additional features for accessibility (i.e. color toggle for color-blind, voice controls, etc). iCare will only function on the Chrome browser as a Chrome extension (Firefox, Safari, etc not supported). All user data (settings, count of videos/day) will be saved locally. For this iteration, _Total Videos Watched_ amount will be reset to 0 after a message is displayed.

### HowToo Comment:
<p align="center">
  <img width="460" height="175" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/HowToo.JPG">
</p>
