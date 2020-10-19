INFO 442A
Samuel Christ, Jimmy Hua, Yichi Zhang, Spencer Knapp

# Homework 2: Design

## Problem

In the United States, 60% of parents use YouTube as a tool for babysitting their children (ages 7-13) on at least a biweekly basis. This exposure is often unregulated, which poses risks of “binging” on content for extended periods of time. Research suggests that habitual consumption of YouTube content may lead to addiction and other psychological issues. YouTube Kids is an existing solution to some of these risks by removing comments and restricting videos shown. This approach to YouTube addiction is not effective because YouTube has a financial stake in designing its algorithm to promote high watch times to earn more revenue from ads. Parents have the option to remove all ads by purchasing YouTube Premium, which still fails to directly address the issues of YouTube addiction and self-regulation of watch time. In light of these risks associated with YouTube, what balance of parent intervention and platform moderation best promotes child safety and self regulation?  

## Solution
We are building a chrome extension where children watching Youtube Kids play educational mini-games in between videos.
- parents control frequency of mini-game pop-ups in settings
- mini games are math based (multiplication, subtraction, division, addition)

The interface behaves as a typical chrome extension, found in the extension bar. The pop-up screen displays after the user clicks on the iCare extension button.
<p align="center">
  <img width="460" height="200" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_a.jpg">
</p>

Parent clicks on the extension icon
Welcome screen opens in a popup with a button for settings
Clicking on settings button changes content of the popup to the settings
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_b.JPG">
</p>
**Dropdown: child age**
* 5-12+
**Dropdown: grade level (k-6)**
**Radio buttons:** 
Based on selection pop up to the right will show:
If total videos watched then 1-5
If total watch times then 5-60 minutes, multiples of 5
Clicking save closes the popup window and settings are stored locally
Child watches a YouTube video while the extension is monitoring watch time/video count in the background set by the parent
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_c.jpg">
</p>

Watch time/video limit is reached
Pop up opens with a  mini game (video also cannot be played)
A timer is set where the popup will close regardless of status of the game
Child can click on the buttons to choose their answer
An incorrect answer will keep them on the minigame but will allow them to keep trying until time runs out
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_d.JPG">
</p>
Filler text
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_e.JPG">
</p>

** 1-2 sentences about redirect to same game if answer is incorrect
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_f.JPG">
</p>
Filler text
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_g.JPG">
</p>


This is the page displayed after the mini-game question is answered correctly.
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_h.JPG">
</p>

iCare mini-game closes when user clicks on "filler" and Youtube Kids returns to normal functionality until next game is triggered (based on parent settings).
<p align="center">
  <img width="460" height="300" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/wireframeV2_i.JPG">
</p>


## Final Remarks:
English, no sound, no keyboard, chrome desktop only (responsive to window size), no accessibility options (things such as color blind support), no contact with a server (everything is saved locally), only one type of minigame

### HowToo Comment:
<p align="center">
  <img width="460" height="200" src="https://raw.githubusercontent.com/autumn-info-442a/Team-iCare/HW2/HowToo.JPG">
</p>
