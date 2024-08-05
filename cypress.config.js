const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: 'https://practice.automationtesting.in',
    // viewportWidth: 1366,
    // viewportHeight: 768,
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
  },
});
