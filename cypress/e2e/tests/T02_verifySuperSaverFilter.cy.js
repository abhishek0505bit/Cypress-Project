// Importing necessary modules and test data
const tests = require("../../fixtures/filters.json")
const page1 = require('../pages/Page01_Home');
const page2 = require("../pages/Page02_SuperSaver")
const page3 = require("../pages/Page03_ProductInfo")

// Top-level test suite describing the verification of super saver page filter
describe("verifying super saver page filter", () => {
    // Runs before each test
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1200, 800);
    });

    // Runs after each test
    afterEach(function () {
        // Check if the current test failed
        if (this.currentTest.state === 'failed') {
            // Take a screenshot on test failure
            cy.viewport(1200, 800); // Set viewport size
            cy.wait(5000); // Wait before taking a screenshot
            cy.screenshot(); // Capture a screenshot
        }
    });

    // Test suite for filtering results based on available filters
    describe("User filters the results based on available filters", () => {
        // Iterating through test data
        tests.forEach((test) => {
            // Check if the test name is for not clicking on the filter
            if (test.name === "user doesn't click on filter") {
                // Test case for not clicking on the filter
                it(tests[0].name, () => {
                    page1.clickOnSuperSaver();
                    page2.clickItemWithoutFilters(tests[0].productName);
                    cy.wait(5000);
                    cy.get('.clickpost-edd__submit-button > span').should('contain', 'Check');
                    page3.selectSize(tests[0].size);
                })
            }
            else {
                // Test case for clicking on the filter
                it(test.name, () => {
                    page1.clickOnSuperSaver();
                    page2.clickOnFilter(test.filters);
                    cy.wait(2000);
                    page2.clickItemWithFilters(test.productName);
                    cy.wait(5000);
                    cy.get('.clickpost-edd__submit-button > span').should('contain', 'Check');
                    page3.selectSize(test.size);
                })
            }
        })
    })
})
