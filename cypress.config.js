const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "CypressShopBook",
    baseUrl: "https://practice.automationtesting.in/",
    specPattern: "./cypress/test/*/**.*"
  },
});
