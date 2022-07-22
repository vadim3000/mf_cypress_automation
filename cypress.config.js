const { defineConfig } = require("cypress");


module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  blockHosts: [
    "*google-analytics.com",
    "*googletagmanager.com",
    "*googletagmanager.com/gtag/",
    "*google.com/ads/",
    "*t.meinfoto.de/g/",
    "*widget.trustpilot.com",
    "*gstatic.com",
    "*w.usabilla.com",
//    "*meinfoto.de",
  ],
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir:"cypress/report",
    reportPageTitle: "Mf automation Report",
    reportFilename: "[status]_[datetime]-[name]-report",
    // reportPageTitle: 'custom-title',
    // embeddedScreenshots: true,
    // inlineAssets: true,
    // saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],

  },

});
