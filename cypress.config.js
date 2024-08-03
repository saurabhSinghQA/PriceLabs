const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    
      env:{
        baseUrl: "https://pricelabs.co/signin",
        username: "qa.pricelabs@gmail.com",
        password: "qg33N$yxJP",
      },

      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },
  },
});
