_INFO 442A: Samuel Christ, Jimmy Hua, Yichi Zhang, Spencer Knapp_

# Homework 2: Design

## Problem

In the United States, 60% of parents use YouTube as a tool for babysitting their children aged 7-13 on at least a biweekly basis ([Kessel, Smith, Toor])(https://www.pewresearch.org/internet/2018/11/07/many-turn-to-youtube-for-childrens-content-news-how-to-lessons/). This exposure is often unregulated, which poses risks of “binging” on content for extended periods of time. Research suggests that habitual consumption of YouTube content may lead to addiction and other psychological issues ([Campbell, Twenge](https://www.sciencedirect.com/science/article/pii/S2211335518301827), [Domoff])(https://news.umich.edu/kids-and-screen-time-signs-your-child-might-be-addicted/). YouTube Kids is an existing solution to some of these risks by removing comments and restricting videos shown. This approach to YouTube addiction is not effective because YouTube has a financial stake in designing its algorithm to promote high watch times to earn more revenue from ads. Parents have the option to remove all ads by purchasing YouTube Premium, which still fails to directly address the issues of YouTube addiction and self-regulation of watch time. In light of these risks associated with YouTube, what balance of parent intervention and platform moderation best promotes child safety and self regulation?  

## Solution
We are building a chrome extension where children watching Youtube Kids play educational mini-games in between videos. Games will be written math problems (addition, subtraction, multiplication, division) where the user will select an answer by clicking on it. Parents/guardians can control the frequency of mini-game occurrances (as a pop-up displayed directly after a video ends) by specifying controls in the iCare settings. If a user selects the correct answer to a question, the pop-up will display a congratulations message with a text button to close and return to Youtube Kids. Otherwise the pop-up will display a try-again message with a text button to attempt the same mini-game until they answer correctly.

The interface behaves as a typical chrome extension, found in the extension toolbar. The pop-up screen displays after the user clicks on the iCare extension button.
<p align="center">
  <img width="460" height="200" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_a.jpg">
</p>

Clicking on settings button changes content of the popup to the settings page. 
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_b.JPG">
</p>
In settings there are:

* **3 Dropdowns** 
  - _Child Age_: 7-12+ (int)
  - _Grade Level_: (K, 1, 2, 3, ... , 7+) (string)
  - Reactive Dropdown: On start displays options for _Total Watch Time_
    (this is the pre-selected button before settings are saved locally). 
  
* **2 Radio Buttons**
  - _Total Videos Watched_:
    If selected, Reactive Dropdown will display 1-5 (int)
  - _Total Watch Time_ (Minutes)
    Else, Total Watch Time is selected and displays 5-60 (int) only multiples of 5 (starting at 5, 10, 15, ...)
 
When Save button is clicked settings data for all 4 user inputs (3 Dropwdowns, 1 Radio Button selection) will be saved locally and pop-up closes. Child watches a YouTube video while the extension is monitoring watch time/video count in the background set by the parent.
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_c.jpg">
</p>

Youtube Kids functions normally until either the _Total Videos Watched_ or _Total Watch Time_ setting is reached.
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_d.JPG">
</p>

When user has either exceeded either _Total Videos Watched_ or _Total Watch Time_ setting (determined from Radio Button and Reactive Dropdown selections) a pop-up opens with a  mini-game (video also cannot be played).
A user can click on the buttons to choose their answer.
* Text display of a math question selected from bank (dict, list, ?) of based on _Child Age_ and _Grade Level_ selections
* 3 Answer Buttons display and are reactive to user hovering over a button and clicking on a button

**A timer is set where the popup will close regardless of status of the game (if user has not clicked on an answer) after 5 minutes.**
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_e.JPG">
</p>
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_f.JPG">
</p>

If user clicks on incorrect answer a try again message is displayed in the pop-up.
* A user clicks a text button "Click here to retry!" to restart the game.
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_g.JPG">
</p>

Pop-up displays "Nice Work" message after the user clicks on the correct answer for the mini-game.

<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_h.JPG">
</p>

iCare mini-game closes when user clicks on the "Click here to keep watching Youtube" text button. Youtube Kids returns to normal functionality until next game is triggered (based on parent settings).
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_i.JPG">
</p>


## Additional Notes:
For this iteration of iCare, all text will be in American English. There will be no sound, no keyboard user inputs (all user inputs will be click based), and no additional features for accessibility (i.e. color toggle for color-blind, voice controls, etc). iCare will only function on the Chrome browser as a Chrome extension (Firefox, Safari, etc not supported). All user data (settings, count of videos/day, total watch time/day) will be saved locally. For this iteration, _Total Videos Watched_ or _Total Watch Time_ amounts will be reset every 24 hours.

### HowToo Comment:
<p align="center">
  <img width="460" height="175" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/HowToo.JPG">
</p>
