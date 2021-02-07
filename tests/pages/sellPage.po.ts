import { browser, by, element } from "protractor";
import { Selectors } from "./support/selectors.enum";
export class SellPagePo {
  getDashboardPageTitle() {
    return element(by.xpath('//div[contains(@class, "dashboardTitle")]'));
  }

  getAddLeadButton() {
    return element(by.xpath('//div[contains(@class, "GlobalAdd--container")]'));
  }

  getMenuItemFromLeadAdd() {
    return element(by.css('div[data-role="menu"]'));
  }

  getLeadOptionFromAddLeadMenu() {
    return element(by.css('div[data-role="menu"]')).element(by.xpath('//div[contains(@class, "baseIconsNeueIcons--leads")]'))
  }

  getAddLeadMenuFirstNameInput(){
    return element(by.css('input[placeholder="First Name"]'));
  }
  getAddLeadMenuLastNameInput(){
    return element(by.css('input[placeholder="Last Name"]'));
  }

  getAddLeadMenuSaveAndVisitButton(){
    return element(by.css('button[data-action="save-and-visit"]'))
  }

  getLeadStatusFromDetailPage(){
    return element(by.className('lead-status'))
  }

  // switchToFrame(number){
  //   return browser.switchTo().frame(number);
  // }
  // turnOnOffAngularWaiting(decision) {
  //   return browser.waitForAngularEnabled(decision);
  // }

  // getLoginPageEmailInput() {
  //   return element(by.id(Selectors.loginEmailInput));
  // }

  // getLoginPagePasswordInput() {
  //   return element(by.id(Selectors.loginPasswordInput));
  // }

  // getLoginSubmitButton() {
  //   return element(by.id(Selectors.loginSignInButton));
  // }
}
