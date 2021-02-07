import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";
import { browser, element, by } from "protractor";
import { LoginPagePo } from "../pages/loginPage.po";

let loginPage: LoginPagePo = new LoginPagePo();

Given(/^I'm on the Zendesk login page$/, { timeout: 2 * 5000 }, async () => {
  await loginPage.turnOnOffAngularWaiting(false);
  await loginPage.navigateToLoginPage();
  // await browser.sleep(2000);
  // await browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
  console.log('show mi iframe' + await element(by.tagName('iframe')).isDisplayed());

  await loginPage.switchToFrame(0);
});

When(
  /^I log in with Username "([^"]*)" and Password "([^"]*)" credentials$/,{ timeout: 3 * 5000 },
  async (username, password) => {
    const loginPageUsernameElement = await loginPage.getLoginPageEmailInput();
    const loginPagePasswordElement = await loginPage.getLoginPagePasswordInput();
    const loginButton = await loginPage.getLoginSubmitButton();
    // await browser.switchTo().frame(0)
    // console.log(' patrzam ' + await element(by.id('user_email')).isPresent())
    // console.log(' patrzam ' + await element(by.xpath('//input[@id="user_email"]')).isPresent())
    // console.log(' patrzam  inputy' + await element.all(by.tagName('input')).count())
    // await loginPage.turnOnOffAngularWaiting(false);
    await loginPageUsernameElement.clear();
    await loginPagePasswordElement.clear();
    await loginPageUsernameElement.sendKeys(username);
    await loginPagePasswordElement.sendKeys(password);
    await loginButton.click();
  }
);

Then(/^I'm do nothing and wait for (\d+) miliseconds$/, { timeout: 5 * 5000 }, async (number) => 
  {
    await browser.sleep(number);
    // const handles = await browser.getAllWindowHandles();
    // await browser.switchTo().window(handles[1]);
    // await element(by.buttonText('Add')).click();
    // console.log('Pokaz element' + await element(by.xpath('//div[contains(@class, "dashboardTitle")]')).getText());
    // await element(by.id('global-add')).click();
    // await browser.sleep(4000);
  }
);

Then(/^I log in with proper Username and Password credentials hidden in environment variables$/, async () => {
    
  const loginPageUsernameElement = await loginPage.getLoginPageEmailInput();
  const loginPagePasswordElement = await loginPage.getLoginPagePasswordInput();
  const loginButton = await loginPage.getLoginSubmitButton();

  await loginPageUsernameElement.clear();
  await loginPagePasswordElement.clear();
  await loginPageUsernameElement.sendKeys(process.env.E2E__Zendesk_Email)
  await loginPagePasswordElement.sendKeys(process.env.E2E_Zendesk_Password)
  await loginButton.click();
  
});
