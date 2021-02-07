import {expect} from 'chai';
import {Given, When, Then} from 'cucumber';
import {browser, ExpectedConditions, element, by} from 'protractor';
import {MainPagePo} from '../pages/mainPage.po'

const mainPage: MainPagePo = new MainPagePo();

Then(/^I should see user options of the main page and I click it$/, {timeout: 2 * 5000}, async () =>{

    await browser.wait(ExpectedConditions.visibilityOf(mainPage.getZendeskProductButton()), 5000,'Element is not visible').then(async () => {
    const userOptionsButton = await mainPage.getZendeskProductButton();
    await userOptionsButton.click();
})


})

Then (/^I click user options with title like "([^"]*)"$/,{timeout: 2 * 5000}, async (titleText)=>{
  const userOptionsButtonButtonByTitle = await mainPage.getZendeskProductMenuContentElementByTitle(titleText);
  await userOptionsButtonButtonByTitle.click();
})



Then(/^I'm switch browser tab to tab number (\d+)$/, { timeout: 4 * 5000 }, async (number) => 
  {
    const handles = await browser.getAllWindowHandles();
    await browser.switchTo().window(handles[number-1]);
  }
);