const { defineConfig } = require("cypress");

// import rollupPreprocessor from 'cypress-rollup-preprocessor'


module.exports = defineConfig({

  projectId: "jbgiu1",
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
    embeddedScreenshots: true,
    inlineAssets: true,
    // saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('file:preprocessor', rollupPreprocessor())

      const cucumber = require('cypress-cucumber-preprocessor').default

      module.exports = (on, config) => {
        on('file:preprocessor', cucumber())
      }

      // const webpackPreprocessor = require('@cypress/webpack-preprocessor')

      // module.exports = (on) => {
      //   on('file:preprocessor', webpackPreprocessor())
      // }

      const webpackPreprocessor = require('@cypress/webpack-preprocessor')

      module.exports = (on) => {
        const options = {
          // send in the options from your webpack.config.js, so it works the same
          // as your app's code
          webpackOptions: require('../../webpack.config'),
          watchOptions: {},
        }

        on('file:preprocessor', webpackPreprocessor(options))
      }
    },
    specPattern: ['cypress/e2e/**/*.{js,jsx,ts,tsx,feature}'],
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
  },


});
