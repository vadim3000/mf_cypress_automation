/// <reference types="cypress"/>
/// <reference types=”cypress-xpath” />


describe('PCS testing ', () => {

    it('The user on PCS home Page', () => {
        // 1 The user on the canvas LP page, accepts cokkies
        cy.visit('https://pcs-testing.picanova.de/Navi.jsf')


        cy.get('[name="loginForm:username"]')
            .type('vadim.golban')

        cy.get('[name="loginForm:password"]')
            .type('xDKhCb4w')

        cy.get('[name="loginForm:login"]')
            .click()

        // cy.xpath("//a[normalize-space()='Regular Orders']")
        //     .click()

        cy.get("a[href='OrderTable.jsf?filter=regular']")
            .click()

        cy.get('[name="mainform:customSearch"]')
            .type('TOP221000008824')

        cy.xpath("//span[normalize-space()='Search']")
            .click()

        cy.wait(2000)

        // cy.xpath("//td[normalize-space()='DT15455782']")
        //     .dblclick()

        // cy.get("td").parents("tr.ui-datatable-selectable newodd").eq(0)
        //     .dblclick()

        cy
            // .get("table[role='grid']")
            .get("tbody[id='mainform:data_data']")
            // .children("tr[class=['ui-widget-content ui-datatable-even ui-datatable-selectable newodd']")
            .get("tr")
            // .children("td[role='gridcell']")
            .get("td")
            .eq(0)
            .dblclick()

        // cy.get('.zvvotu-6.cEwXxo')
        //     .invoke('text')
        //     .then((text) => {
        //         cy.writeFile('path/to/data.json',{text})
        //     });

        // cy.writeFile('path/to/data.json',{title})
        // cy.readFile('path/to/data.json').then((testOrder) => {
        //     expect(testOrder.title).to.equal('MFA19907009377')
        // })

    })
})
