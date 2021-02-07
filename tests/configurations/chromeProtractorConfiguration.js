const { env } = require("process");
const { join } = require("path");

exports.config = {
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: "chrome",
    acceptInsecureCerts: true,
  },
  directConnect: true,
  specs: ["../features/*.feature"],
  baseUrl: process.env.PC_SERVER_HOST
    ? `${process.env.PC_SERVER_HOST}`
    : "https://hard-wolverines.zendesk.com/",
  cucumberOpts: {
    require: ["../step_definitions/*.steps.ts", "../support/scenarioHook.ts"],
    tags: false,
    format: ["json:./tests/reports/report-from-zendesk-sell-chrome.json"],
    profile: false,
    // no-source: true
  },
  async onPrepare() {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(3000);
    require("ts-node").register({
      project: require("path").join(__dirname, "../../tsconfig.json"),
    });
  },
};
