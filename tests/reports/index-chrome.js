var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: './tests/reports/report-from-zendesk-sell-chrome.json',
  output: './tests/reports/report-from-zendesk-sell-chrome.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version":"1.0.0",
    "Test Environment": "Test Environment",
    "Browser": "Chrome",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
