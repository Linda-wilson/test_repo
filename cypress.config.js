const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    watchForFileChanges: true,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
