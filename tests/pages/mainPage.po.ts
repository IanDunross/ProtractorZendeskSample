import {browser,by,element} from 'protractor'
import {Selectors} from './support/selectors.enum'



export class MainPagePo {

  getZendeskProductButton(){
    return element(by.id(Selectors.zendeskProductMenuButton))
  }

  getZendeskProductMenuContentElementByTitle(titleText){
    return element(by.id(Selectors.zendeskProductMenuContentElement)).element(by.css('li[title="' + titleText + '"]'));
  }

}