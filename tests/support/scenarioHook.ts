import {browser, by, element} from 'protractor';

let{ After, Before, Status } = require('cucumber');

After(function(testCase) {
  let me = this;

  if (testCase.result.status === Status.FAILED) {
    return browser.takeScreenshot().then(function(screenshot) {
      return me.attach(screenshot, 'image/png');
    });
  }
});
