import { browser, by, element } from "protractor";
import { Selectors } from "./support/selectors.enum";

export class SettingsSellPagePo {
  getSettingsOptionLeads() {
    return element(by.id(Selectors.settingsSideBar)).element(by.className('leads'))
  }
  getSettingsLeadOptionByLink(text){
    return element(by.id(Selectors.settingsMainCointeinerOfOption)).element(by.linkText(text))
  }
  getEditButtonFromLeadStatusesForStatusName(nameOfTheStatus){
    //little monster here
    const xpath = '//h4[text()="' + nameOfTheStatus + '"]/parent::label/following-sibling::div[contains(@class,"controls")]//button[text()="Edit"]'
    return element(by.id(Selectors.settingsMainCointeinerOfOption)).element(by.xpath(xpath));
  }

  getEditStatusInput(){
    return element(by.css('input[id="name"]'));
  }
}