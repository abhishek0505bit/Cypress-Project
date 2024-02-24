## steps I have done:
1) added base url in config.json>e2e
2) now you can use this baseURL in two ways 
```javascript
const baseURL = Cypress.config("baseUrl");
cy.visit(baseURL);
```
 or

`cy.visit('/')`
- ---------------------------------------------------------------------------------------------------------------------------------------------
3) for cypress xpath installation : `npm install -D cypress-xpath`
4) then in `cypress\support\e2e.js` : write `require('cypress-xpath')`
5) in code : use it as `cy.xpath(" ")`

-----------------------------------------------------------------------------------------------------------------------------------------------

6) 