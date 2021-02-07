import { expect } from 'chai';
import {Given, When, Then} from 'cucumber';
import {browser, ExpectedConditions, element, by} from 'protractor';
import {SellPagePo} from '../pages/sellPage.po'

const sellPage: SellPagePo = new SellPagePo();
let myUrl;

Then(/^I should see header of the Sell Page like "([^"]*)"$/, {timeout: 2 * 5000}, async (text) =>{

// const userOptionsButton = await mainPage.getZendeskProductButton();
// expect(await userOptionsButton.isDisplayed()).to.equal(true);
// await userOptionsButton.click();
  await browser.wait(ExpectedConditions.visibilityOf(sellPage.getDashboardPageTitle()), 5000).then(async () => {
    const dashboardTitle = await sellPage.getDashboardPageTitle();
    expect(await dashboardTitle.getText()).to.equal(text);
})
//   browser.wait(ExpectedConditions.visibilityOf(mainPage.getZendeskProductButton()), 5000).then(async () => {
//     const userOptionsLogoutButton = await mainPage.getSignOutButtonFromUsersOptions();
//     await userOptionsLogoutButton.click();
// })

})

Then(/^I add a Lead with information like first name "([^"]*)" and last name "([^"]*)"$/, {timeout: 2 * 5000}, async (firstName,lastName) =>{

  // const userOptionsButton = await mainPage.getZendeskProductButton();
  // expect(await userOptionsButton.isDisplayed()).to.equal(true);
  // await userOptionsButton.click();
  // console.log('pokaz ' + await sellPage.getMenuItemFromLeadAdd().isPresent())
  await sellPage.getAddLeadButton().click();
  // console.log('pokaz ' + await sellPage.getMenuItemFromLeadAdd().isDisplayed())
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
    myUrl = await browser.getCurrentUrl();
  
  })


  
  Then(/^Test$/, {timeout: 2 * 5000}, async () =>{


console.log('pokaz urla ' + myUrl)
  
  })