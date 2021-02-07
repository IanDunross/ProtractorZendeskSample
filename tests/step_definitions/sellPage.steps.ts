import { expect } from 'chai';
import {Given, When, Then} from 'cucumber';
import {browser, ExpectedConditions, element, by} from 'protractor';
import {SellPagePo} from '../pages/sellPage.po'

const sellPage: SellPagePo = new SellPagePo();
// I wanted use this url later to go back for specific lead and check status
let myUrlOfSpecificLead;

Then(/^I should see header of the Sell Page like "([^"]*)"$/, {timeout: 2 * 5000}, async (text) =>{

  await browser.wait(ExpectedConditions.visibilityOf(sellPage.getDashboardPageTitle()), 7000).then(async () => {
    const dashboardTitle = await sellPage.getDashboardPageTitle();
    expect(await dashboardTitle.getText()).to.equal(text);
})

})

Then(/^I add a Lead with information like first name "([^"]*)" and last name "([^"]*)"$/, {timeout: 2 * 5000}, async (firstName,lastName) =>{


      await sellPage.getAddLeadButton().click();
      await browser.wait(ExpectedConditions.visibilityOf(sellPage.getMenuItemFromLeadAdd()), 5000).then(async () => {
      await sellPage.getLeadOptionFromAddLeadMenu().click();
      await sellPage.getAddLeadMenuFirstNameInput().clear();
      await sellPage.getAddLeadMenuLastNameInput().clear();
      await sellPage.getAddLeadMenuFirstNameInput().sendKeys(firstName);
      await sellPage.getAddLeadMenuLastNameInput().sendKeys(lastName)
      await sellPage.getAddLeadMenuSaveAndVisitButton().click();

  })
})


  Then(/^I am on the added Lead details page with status of the lead like "([^"]*)"$/, {timeout: 2 * 5000}, async (statusOfTheLead) =>{


    expect(await sellPage.getLeadStatusFromDetailPage().getText()).to.equal(statusOfTheLead);
    myUrlOfSpecificLead = await browser.getCurrentUrl();
  
  })

  Then(/^I click setting on the sell page$/, {timeout: 2 * 5000}, async () =>{


    await sellPage.getSettingButton().click();
  
  })