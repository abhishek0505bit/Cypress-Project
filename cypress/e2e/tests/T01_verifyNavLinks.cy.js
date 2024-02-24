// Importing the Page01_Home module
const page1 = require('../pages/Page01_Home');

// Test suite for verifying navigation links
describe("verifying nav links", () => {
  // Runs before each test
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1200, 800);
  });

  // Nested describe block for dropdown user links
  describe('By using dropdown user', () => {
    // Test case to verify opening the brands page
    it("should open the brands page", () => {
      page1.clickOnBrands();
      cy.url().should('eq', 'https://shopthearena.com/collections/all');
      cy.log("brands page opened successfully");
    });

    // Test case to verify opening the men section page
    it("should open the men section page", () => {
      page1.clickOnMenLink();
      cy.url().should('eq', 'https://shopthearena.com/collections/men-all-products');
      cy.log("Men Link page opened successfully");
    });

    // Test case to verify opening the women section page
    it("should open the women section page", () => {
      page1.clickOnWomenLink();
      cy.url().should('eq', 'https://shopthearena.com/collections/womens-all-products');
      cy.log("Women Link page opened successfully");
    });

    // Test case to verify opening the new launches page
    it("should open new launches page", () => {
      page1.clickOnNewLaunches();
      cy.url().should('eq', 'https://shopthearena.com/collections/new-launches');
      cy.log("new launches clicked successfully");
    });

    // Test case to verify opening the super saver page
    it('should open the super saver page', () => {
      page1.clickOnSuperSaver();
      cy.url().should('eq', 'https://shopthearena.com/collections/super-saver-store');
      cy.log("super saver page opened successfully");
    });

    // Test case to verify opening the rewards program page
    it("should open rewards program page", () => {
      page1.clickOnRewardsProgram();
      cy.url().should('eq', 'https://shopthearena.com/pages/sta-rewards');
      cy.log("rewards program page opened successfully");
    });
  });
});
