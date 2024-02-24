const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ht7ts2",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl : "https://shopthearena.com",
  },
  screenshotsFolder: 'cypress/screenshots', // Define the folder to store screenshots
  // screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
    video: true,
  
});
