# ProtractorZendekSample
My repository for Zendesk App

Tested on:
Windows 10 1909
Node version 12.16.1

# Preconditions

Installed Node.js
https://nodejs.org/en/

# Instruction

#### 1.) Install npm (for example as Node.js default package manager).
#### 2.) Download or clone repository.
#### 3.) Add environment variables with proper e-mail value, and password value for account E2E__Zendesk_Email and E2E__Zendesk_Password
#### 4.) Use command `npm install` in the repository folder (package.json file location).
#### 5.) Before first use of tests, please use `npm run pree2e` script for download latest chrome driver.
#### 6.) Use `npm run chromeZendesk` script for run tests on Chrome.
#### 7.) Use `npm run generateReportZendesk` script to generate report from tests run in chrome. Report should be available in the  `/tests/reports/report-from-zendesk-sell-chrome.html` as the html file.
