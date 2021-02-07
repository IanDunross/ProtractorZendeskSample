import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";
import { browser, element, by } from "protractor";
import { LoginPagePo } from "../pages/loginPage.po";

let loginPage: LoginPagePo = new LoginPagePo();

Given(/^I'm on the Zendesk login page$/, { timeout: 2 * 5000 }, async () => {
  await loginPage.turnOnOffAngularWaiting(false);
  await loginPage.navigateToLoginPage();
  //There is frame - need to switch for see elements
  await loginPage.switchToFrame(0);
});

When(
  /^I log in with Username "([^"]*)" and Password "([^"]*)" credentials$/,{ timeout: 3 * 5000 },
    async (username, password) => {
    const loginPageUsernameElement = await loginPage.getLoginPageEmailInput();
    const loginPagePasswordElement = await loginPage.getLoginPagePasswordInput();
    const loginButton = await loginPage.getLoginSubmitButton();

    await loginPageUsernameElement.clear();
    await loginPagePasswordElement.clear();
    await loginPageUsernameElement.sendKeys(username);
    await loginPagePasswordElement.sendKeys(password);
    await loginButton.click();
  }
);

Then(/^I'm do nothing and wait for (\d+) miliseconds$/, { timeout: 20 * 5000 }, async (number) => 
  {
    await browser.sleep(number);

  }
);

Then(/^I log in with proper Username and Password credentials hidden in environment variables$/, async () => {
    
  const loginPageUsernameElement = await loginPage.getLoginPageEmailInput();
  const loginPagePasswordElement = await loginPage.getLoginPagePasswordInput();
  const loginButton = await loginPage.getLoginSubmitButton();

  await loginPageUsernameElement.clear();
  await loginPagePasswordElement.clear();
  await loginPageUsernameElement.sendKeys(process.env.E2E_Zendesk_Email)
  await loginPagePasswordElement.sendKeys(process.env.E2E_Zendesk_Password)
  await loginButton.click();
  
});
