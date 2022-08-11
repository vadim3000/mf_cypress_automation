import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";



Given('User opens  browser and move to the canvas page of', ()=>{
    // 1 The user on the canvas LP page, accepts cokkies and uplaod an image
    cy.visit('https://www.meinfoto.de/foto-in-gross/foto-auf-leinwand.jsf')
    cy.wait(500)
    cy.get("span.cf1y60").contains('Alle akzeptieren')
        .click()
    cy.wait(500)

})