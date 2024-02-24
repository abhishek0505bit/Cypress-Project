class Page03_ProductInfo {
    elements = {
        // size list 
        sizeList: () => { return cy.xpath("//label[@class='SizeSwatch']"); },
        
    }

    // method to select a particular size from the available list
    selectSize(sizeData){
        // iterate through each size
        this.elements.sizeList().each(size => {
            // if text of current size matches size Data then click it 
            if (size.text() === sizeData) {
                cy.wrap(size).click();
            }
        });
    }
}
module.exports = new Page03_ProductInfo;