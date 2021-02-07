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

  getSettingButton(){
    return element(by.id(Selectors.settingsButtonFromSellPage));
  }
}
