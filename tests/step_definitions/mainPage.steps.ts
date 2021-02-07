import { expect } from 'chai';
import {Given, When, Then} from 'cucumber';
import {browser, ExpectedConditions, element, by} from 'protractor';
import {MainPagePo} from '../pages/mainPage.po'

const mainPage: MainPagePo = new MainPagePo();

Then(/^I should see user options of the main page and I click it$/, {timeout: 2 * 5000}, async () =>{

// const userOptionsButton = await mainPage.getZendeskProductButton();
// expect(await userOptionsButton.isDisplayed()).to.equal(true);
// await userOptionsButton.click();
  await browser.wait(ExpectedConditions.visibilityOf(mainPage.getZendeskProductButton()), 5000).then(async () => {
    const userOptionsButton = await mainPage.getZendeskProductButton();
    await userOptionsButton.click();
})
//   browser.wait(ExpectedConditions.visibilityOf(mainPage.getZendeskProductButton()), 5000).then(async () => {
//     const userOptionsLogoutButton = await mainPage.getSignOutButtonFromUsersOptions();
//     await userOptionsLogoutButton.click();
// })

})

Then (/^I click user options with title like "([^"]*)"$/,{timeout: 2 * 5000}, async (titleText)=>{
  const userOptionsButtonButtonByTitle = await mainPage.getZendeskProductMenuContentElementByTitle(titleText);
  await userOptionsButtonButtonByTitle.click();
})


// Then(/^I click user opti$/, async () =>{

//   const userOptionsButton = await mainPage.getZendeskProductButton();
//   expect(await userOptionsButton.isDisplayed()).to.equal(true);
//   //   browser.wait(ExpectedConditions.visibilityOf(mainPage.getZendeskProductButton()), 5000).then(async () => {
//   //     const userOptionsLogoutButton = await mainPage.getSignOutButtonFromUsersOptions();
//   //     await userOptionsLogoutButton.click();
//   // })
//   //   browser.wait(ExpectedConditions.visibilityOf(mainPage.getZendeskProductButton()), 5000).then(async () => {
//   //     const userOptionsLogoutButton = await mainPage.getSignOutButtonFromUsersOptions();
//   //     await userOptionsLogoutButton.click();
//   // })
  
//   })


Then(/^I'm switch browser tab to tab number (\d+)$/, { timeout: 4 * 5000 }, async (number) => 
  {
    const handles = await browser.getAllWindowHandles();
    await browser.switchTo().window(handles[number-1]);
  }
);