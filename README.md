# Ike's Nest
This is an ***unofficial*** iCIMS TSE companion extension for Google Chrome.

## What does this offer?
In the current version, this is mainly used for quick links to some of the most accessed articles on the Care site. These are common articles that are pulled for cases most often. I put them in an extension to make it easy to access.

## How to install
Installation is really easy.
1. Download the repo under releases
2. Unzip into a folder
3. In Chrome, navigate to [chrome://extensions/](chrome://extensions/)
4. Turn Developer Mode on by selecting the toggle on the top right
5. Press the newly added Load Unpacked button
6. Select the unzipped folder

## What's planned for the future
- Link customizabilty
- Autosort for Event Notification drop down
- Custom Salesforce auto-text

## Version notes
### 0.3.2.4 - Unreleased
- Added LinkedIn RSC link to list

### 0.3.2.3
- Removed unused password save code from options.js

### 0.3.2.2
- Moved the password setting into the pop-up for more streamlined usability
- Deleted unused files

### 0.3.1.0
- Added alerts for when the link and password is saved

### 0.3.0.0
- Cleaned up CSS for options and popup with variables
- Rebuilt backend so common links are pulled through the chrome storage api
- Built functionality to set custom bookings link and portal password

### 0.2.1.2
- Added the javascript so the Ike and iCIMS logo links to the Care site.

### 0.2.1
First release version for alpha testing. Main features of this release are very limited. Features are:
- Quick link to the care site through the iCIMS logo
- Six quick links to common pages on the care site
    - Adding and Editing Fields
    - Common Definitions of User Licenses
    - Auto-sourcing
    - Configuring Office 365
    - IP and Domains to Allow
    - Searching & Reporiting Curriculum
- Three additional links for TSE resources
    - Job Feed
    - Standard iForms
    - VS Widget Types
- Problems with this release:
    - The options page effectively does nothing at this time.