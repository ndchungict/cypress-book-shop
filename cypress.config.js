const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'ChungND_jt6ggPxuSxaG_PlrY59FQJb1Now375Bc9nCUhFHkKCt42ls1mgKVoOGnaDPn_laU',
    endpoint: 'https://demo.reportportal.io/api/v1',
    project: 'ndchungict_personal',
    launch: 'CypressE2E',
    description: 'Cypress E2E Launch',
    attributes: [
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'cypress',
      },
    ],
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
