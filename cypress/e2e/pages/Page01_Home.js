// Class representing page interactions for Page01_Home
class Page01_Home {
    // Elements on the Page01_Home
    elements = {
        // Links on the navigation dropdown
        brandsLink: () => { return cy.xpath("//a[normalize-space()='Brands']"); },
        menLink: () => { return cy.xpath("//a[normalize-space()='Men']"); },
        womenLink: () => { return cy.xpath("//a[normalize-space()='Women']"); },
        newLaunchesLink: () => { return cy.xpath("//a[normalize-space()='New Launches']"); },
        superSaverLink: () => { return cy.xpath("//a[normalize-space()='Super Saver Store']"); }, // Super saver link
        rewardsProgramLink: () => { return cy.xpath("//a[normalize-space()='Rewards Program']"); }
    }

    // Clicks on the hamburger icon to open navigation
    clickOnHamburgerIcon() {
        this.elements.hamburgerIcon().click();
    }

    // Clicks on the Brands link in the navigation
    clickOnBrands() {
        this.elements.brandsLink().click();
        cy.log("brand link clicked successfully");
    }

    // Clicks on the Men link in the navigation
    clickOnMenLink() {
        this.elements.menLink().click();
        cy.log("Men link clicked successfully");
    }

    // Clicks on the Women link in the navigation
    clickOnWomenLink() {
        this.elements.womenLink().click();
        cy.log("women link clicked successfully");
    }

    // Clicks on the New Launches link in the navigation
    clickOnNewLaunches() {
        this.elements.newLaunchesLink().click();
        cy.log("new launches clicked successfully");
    }

    // Clicks on the Super Saver link in the navigation
    clickOnSuperSaver() {
        this.elements.superSaverLink().click({ force: true }); // Using { force: true } to force the click
        cy.log("super saver link clicked successfully");
    }

    // Clicks on the Rewards Program link in the navigation
    clickOnRewardsProgram() {
        this.elements.rewardsProgramLink().click({ force: true }); // Using { force: true } to force the click
        cy.log("rewards program link clicked successfully");
    }
}

// Exporting an instance of the Page01_Home class
module.exports = new Page01_Home;
