Feature: Zendesk Homework

Feature Description:
This is Homework from Zendesk

Scenario: Login to application and go to Sell Page
       Given I'm on the Zendesk login page
       When I log in with proper Username and Password credentials hidden in environment variables
       # When I log in with Username "MyEmail" and Password "MyPassword" credentials
       Then I should see user options of the main page and I click it
       When I click user options with title like "Sales CRM"
       #There should be open next browser tab
       And I'm switch browser tab to tab number 2
       Then I should see header of the Sell Page like "My Dashboard"


       Scenario: Adding a Lead and check status
       When I add a Lead with information like first name "TestingOnProd" and last name "MBankStyle"
       And I am on the added Lead details page with status of the lead like "New"

       Scenario: Change Lead status in the settings
       When I click setting on the sell page
       And I click settings option: Leads
       And I click Leads option with name "Lead Status"
       And I click edit button for status with name "New"
       When I edit lead status from: "New" to: "Change"
       Then I go back to my details lead page
       And I am on the added Lead details page with status of the lead like "Change"


       Scenario: Reverse change from previous scenario - and go back to original status of the Lead "New"
       When I click setting on the sell page
       And I click settings option: Leads
       And I click Leads option with name "Lead Status"
       And I click edit button for status with name "Change"
       When I edit lead status from: "Change" to: "New"
       Then I go back to my details lead page
       And I am on the added Lead details page with status of the lead like "New"