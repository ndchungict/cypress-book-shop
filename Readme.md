# Cypress Automation Test


## Installing

#### Require: 
- Node.js 18.x, 20.x, 22.x and above
- Git
#### Install via npm
```
cd /to/project/path
```
```
npm init
```
```
npm install cypress --save-dev
```
#### Npm configuration
Use these commands:
```
npm config set proxy http://username:password@host:port
npm config set https-proxy http://username:password@host:port
```
Or edit  ~/.npmrc file:
```
proxy=http://username:password@host:port
https-proxy=http://username:password@host:port
https_proxy=http://username:password@host:port
```
## Structure
- [**downloads**](downloads)
- [**e2e**](e2e)
    - [**account.cy.js**](e2e/account.cy.js)
    - [**home.cy.js**](e2e/home.cy.js)
    - [**login.cy.js**](e2e/login.cy.js)
    - [**shop.cy.js**](e2e/shop.cy.js)
- [**fixtures**](fixtures)
    - [**registrationData.json**](fixtures/registrationData.json)
- [**pages**](pages)
    - [**addressPage.js**](pages/addressPage.js)
    - [**homePage.js**](pages/homePage.js)
    - [**myAccountPage.js**](pages/myAccountPage.js)
    - [**productPage.js**](pages/productPage.js)
    - [**shopPage.js**](pages/shopPage.js)
- [**screenshots**](screenshots)
- [**support**](support)
- [**.gitignore**](.gitignore)
- [**cypress.config.js**](cypress.config.js)
- [**package.json**](package.json)
- [**package-lock.json**](package-lock.json)

## Config
cypress.config.js
```javascript
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
        chromeWebSecurity: false,
        defaultCommandTimeout:10000,
    },
});
```


## 

## Github workflow
.github/workflows/e2e.yaml
```yaml
name: Cypress E2E Tests

on:
  push:
    branches:
      - "develop"
  pull_request:
    branches:
      - "main"

  schedule:
    - cron: "*/5 * * * *"

jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Install and run test
        uses: actions/checkout@v4
      # Install npm dependencies, cache them correctly
      # and run all Cypress tests
      - name: Cypress run
        uses: cypress-io/github-action@v6
```
Run Github action on a schedule
```yaml
  schedule:
    - cron: "*/5 * * * *"
```
```text
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of the week (0 - 6)
│ │ │ │ │                                   
│ │ │ │ │
│ │ │ │ │
* * * * *
```
## ReportPortal Cypress Integration
#### Installation
```
npm install --save-dev @reportportal/agent-js-cypress
```
#### Configuration
