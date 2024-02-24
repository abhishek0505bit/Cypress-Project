// Class representing page interactions for the Page02_SuperSaver page
class Page02_SuperSaver {
    elements = {
        // Elements on the SuperSaver page
        team: () => { return cy.xpath("(//button[text()='team'])[2]"); },
        product: () => { return cy.xpath("(//button[text()='product'])[2]"); },
        size: () => { return cy.xpath("(//button[text()='size'])[2]"); },
        teamFilters: () => { return cy.xpath("//*[@id='shopify-section-template--14243785637934__collection-template']/section/div[2]/div[1]/div[1]/div/div[1]/div/div/ul/li/button"); },
        productFilters: () => { return cy.xpath("//*[@id='shopify-section-template--14243785637934__collection-template']/section/div[2]/div[1]/div[1]/div/div[2]/div/div/ul/li/button"); }, // super saver link
        sizeFilters: () => { return cy.xpath("//*[@id='shopify-section-template--14243785637934__collection-template']/section/div[2]/div[1]/div[1]/div/div[3]/div/div/ul/li/button"); },
        productListWithFilters: () => { return cy.xpath("//*[@id='shopify-section-template--14243785637934__collection-template']/section/div[2]/div[1]/div[2]/div[2]/div/div/div/div/div/h2[1]/a"); },
        productListWithoutFilters: () => { return cy.xpath("//*[@id='shopify-section-template--14243785637934__collection-template']/section/div[2]/div[1]/div[2]/div[1]/div/div/div/div/div/h2[1]/a"); },
    }

    // Clicks on the Team button
    clickOnTeam() {
        this.elements.team().click();
        cy.log("Team clicked successfully");
    }

    // Clicks on the Product button
    clickOnProduct() {
        this.elements.product().click();
        cy.log("product clicked successfully");
    }

    // Clicks on the Size button
    clickOnSize() {
        this.elements.size().click();
        cy.log("size clicked successfully");
    }

    // Clicks on the filters based on the filter array length
    clickOnFilter(filter) {
        switch (filter.length) {
            case 1:
                // Clicks on Team
                this.clickOnTeam();
                this.elements.teamFilters().each(teamFilter => {
                    if (teamFilter.text() === filter[0]) {
                        cy.wrap(teamFilter).click();
                    }
                });
                break;
            case 2:
                // Clicks on Team
                this.clickOnTeam();
                this.elements.teamFilters().each(teamFilter => {
                    if (teamFilter.text() === filter[0]) {
                        cy.wrap(teamFilter).click();
                    }
                });
                // Clicks on Product
                this.clickOnProduct();
                this.elements.productFilters().each(productFilter => {
                    if (productFilter.text() === filter[1]) {
                        cy.wrap(productFilter).click();
                    }
                });
                break;
            case 3:
                // Clicks on Team
                this.clickOnTeam();
                this.elements.teamFilters().each(teamFilter => {
                    if (teamFilter.text() === filter[0]) {
                        cy.wrap(teamFilter).click();
                    }
                });
                // Clicks on Product
                this.clickOnProduct();
                this.elements.productFilters().each(productFilter => {
                    if (productFilter.text() === filter[1]) {
                        cy.wrap(productFilter).click();
                    }
                });
                // Clicks on Size
                this.clickOnSize();
                this.elements.sizeFilters().each(sizeFilter => {
                    if (sizeFilter.text() === filter[2]) {
                        cy.wrap(sizeFilter).click();
                    }
                });
                break;
            default:
                break;
        }
    }

    // Clicks on the product item without filters
    clickItemWithoutFilters(productName) {
        this.elements.productListWithoutFilters().each(productItem => {
            if (productItem.text() === productName) {
                cy.wrap(productItem).click();
            }
        });
    }

    // Clicks on the product item with filters
    clickItemWithFilters(productName) {
        this.elements.productListWithFilters().each(productItem => {
            if (productItem.text() === productName) {
                cy.wrap(productItem).click();
            }
        });
    }
}

// Exporting an instance of the Page02_SuperSaver class
module.exports = new Page02_SuperSaver;
