Feature: Zendesk Homework

Feature Description:
This is Homework from Zendesk

Scenario: Login to application and go to Sell Page
Given I'm on the Zendesk login page
# Then I'm do nothing and wait for 30000 miliseconds
Then I log in with Username "james-howlett@wp.pl" and Password "JohnnyCage" credentials
        # Then I'm do nothing and wait for 10000 miliseconds
       Then I should see user options of the main page and I click it
       Then I click user options with title like "Sales CRM"
       Then I'm switch browser tab to tab number 2
       Then I should see header of the Sell Page like "My Dashboard"


       Scenario: Adding a Lead
#        Then I'm do nothing and wait for 4000 miliseconds
       Then I add a Lead with information like first name "TestingOnProd" and last name "MBankStyle"
       Then I am on the added Lead details page with status of the lead like "New"
       Then Test
        Then I'm do nothing and wait for 4000 miliseconds
        # And I see Alert with information like "Error: user not authenticated with this credentials!"