/// <reference types="cypress"/>
/// <reference types=”cypress-xpath” />


describe('Test on Canvas LP page', () => {

    it('The user on the canvas LP page, accepts cookies', () => {
        // 1 The user on the canvas LP page, accepts cokkies
        cy.visit('https://www.meinfoto.de/foto-in-gross/foto-auf-leinwand.jsf')
        cy.wait(500)
        cy.xpath("//span[contains(text(),'Alle akzeptieren')]")
            .click()
        cy.wait(500)
    })
})
