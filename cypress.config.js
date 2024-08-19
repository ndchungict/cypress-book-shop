const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'ChungND_au2FMtPAQ9iH3VA2cke0BdQraI3BILdxgRUeLopSM9QjrcF1F5Lkc6egJZ5cfhb_',
    endpoint: 'https://demo.reportportal.io',
    project: 'ndchungict_personal',
    launch: 'MyLaunch',
    description: 'Your first launch description',
    // attributes: [
    //   {
    //     key: 'attributeKey',
    //     value: 'attributeValue',
    //   },
    //   {
    //     value: 'anotherAttributeValue',
    //   },
    // ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
    baseUrl: 'https://practice.automationtesting.in',
    // viewportWidth: 1366,
    // viewportHeight: 768,
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
  },
});
