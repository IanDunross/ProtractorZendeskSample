import {expect} from 'chai';
import {Given, When, Then} from 'cucumber';
import {browser, ExpectedConditions, element, by, protractor} from 'protractor';
import {SettingsSellPagePo} from '../pages/sellPageSettings.po'

const settingsSellPage: SettingsSellPagePo = new SettingsSellPagePo();


Then(/^I click settings option: Leads$/, {timeout: 2 * 5000}, async () =>{

await browser.wait(ExpectedConditions.visibilityOf(settingsSellPage.getSettingsOptionLeads()), 5000, 'Setting option Lead is not visible').then(async () => {
await settingsSellPage.getSettingsOptionLeads().click();

})
})


Then(/^I click settings option by name "([^"]*)"$/, {timeout: 2 * 5000}, async (text) =>{

  await browser.wait(ExpectedConditions.visibilityOf(settingsSellPage.getSettingsOptionLeads()), 5000,'Settings option is not visible').then(async () => {
  await settingsSellPage.getSettingsOptionLeads().click();
  })

})

Then(/^I click Leads option with name "([^"]*)"$/, {timeout: 2 * 5000}, async (text) =>{


      await browser.wait(ExpectedConditions.visibilityOf(settingsSellPage.getSettingsLeadOptionByLink(text)), 5000, 'Lead Status link from settings is not visible').then(async () => {
      await settingsSellPage.getSettingsLeadOptionByLink(text).click();
       })

    
})

Then(/^I click edit button for status with name "([^"]*)"$/, {timeout: 2 * 5000}, async (nameOfTheStatus) =>{

   
    await settingsSellPage.getEditButtonFromLeadStatusesForStatusName(nameOfTheStatus).click();

      
})



Then(/^I edit lead status from: "([^"]*)" to: "([^"]*)"$/, {timeout: 2 * 5000}, async (currentStatusName,newNameOfTheStatus) =>{
          //This one is not finished

          await browser.wait(ExpectedConditions.elementToBeClickable(settingsSellPage.getEditStatusInputByCurrentValue(currentStatusName)), 5000, 'Element is not clicable').then(async () => {
          await settingsSellPage.getEditStatusInputByCurrentValue(currentStatusName).clear();
          await settingsSellPage.getEditStatusInputByCurrentValue(currentStatusName).sendKeys(newNameOfTheStatus);
          await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        
         })
})

