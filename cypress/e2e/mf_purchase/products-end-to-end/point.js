/// <reference types="cypress"/>
/// <reference types=”cypress-xpath” />


describe('Point Md', () => {

    it('The user on the canvas LP page, accepts cookies', () => {
        // 1 The user on the canvas LP page, accepts cokkies
        cy.visit('https://point.md/ru/')

        cy.get('.zvvotu-6.cEwXxo')
            .invoke('text')
            .then((text) => {
                cy.writeFile('path/to/data.json',{text})
            });

        // cy.writeFile('path/to/data.json',{title})
        // cy.readFile('path/to/data.json').then((testOrder) => {
        //     expect(testOrder.title).to.equal('MFA19907009377')
        // })

    })
})
