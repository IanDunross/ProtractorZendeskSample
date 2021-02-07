import { browser, by, element } from "protractor";
import {Selectors} from "./support/selectors.enum"
export class LoginPagePo {
  navigateToLoginPage() {
    return browser.get(browser.baseUrl);
  }

  switchToFrame(number){
    return browser.switchTo().frame(number);
  }
  turnOnOffAngularWaiting(decision) {
    return browser.waitForAngularEnabled(decision);
  }

  getLoginPageEmailInput() {
    return element(by.id(Selectors.loginEmailInput));
  }

  getLoginPagePasswordInput() {
    return element(by.id(Selectors.loginPasswordInput));
  }

  getLoginSubmitButton() {
    return element(by.id(Selectors.loginSignInButton));
  }
}
