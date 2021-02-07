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
    // : "https://app.futuresimple.com/",
    : "https://hard-wolverines.zendesk.com/",
    // : "https://app.futuresimple.com/dashboards/main",
    // :"https://hard-wolverines.zendesk.com/sell/start",
  cucumberOpts: {
    require: ["../step_definitions/*.steps.ts", "../support/scenarioHook.ts"],
    tags: false,
    format: ["json:./tests/reports/report-from-zendesk-sell-chrome.json"],
    profile: false,
    // no-source: true
  },
  // plugins: [
  //     {
  //         // The module name
  //         package: 'protractor-image-comparison',
  //         // Some options, see the docs for more
  //         options: {
  //             baselineFolder: join(process.cwd(), '.tmp/baseline/'),
  //             formatImageName: `{tag}`,
  //             // formatImageName: `{tag}-{logName}-{width}x{height}`,
  //             screenshotPath: join(process.cwd(), '.tmp/'),
  //             savePerInstance: true,
  //             // ... more options
  //         },
  //     },
  // ],
  async onPrepare() {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(3000);
    require("ts-node").register({
      project: require("path").join(__dirname, "../../tsconfig.json"),
    });
  },
};
