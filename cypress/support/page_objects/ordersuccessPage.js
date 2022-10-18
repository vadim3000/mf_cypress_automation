
export class orderSuccessPage{

    saveOrderNumber(){

        // let orderNumber = cy.xpath("//a[@class='link -font15']").text();

        // cy.visit('https://www.meinfoto.de/ordersuccess.jsf')
        // cy.get("a[href*='ordernumber']")
            // .click()
         cy.get("p:contains('Vielen Dank für deine Bestellung!')")
             .should('contain.text','Vielen Dank für deine Bestellunggg!')
            .invoke('text')
            .then((text) => {
                cy.writeFile('path/to/data.json',{text})
            });


        // cy.get('.zvvotu-6.cEwXxo')
        //     .invoke('text')
        //     .then((text) => {
        //         cy.writeFile('path/to/data.json',{text})
        //     });



        // cy.writeFile('path/to/data.json',{orderNumber})
        // cy.readFile('path/to/data.json').then((testOrder) => {
        //     expect(testOrder.orderNumber).to.equal('MFA19907009377')
        // })

    }
}

export const onOrderSuccessPage = new orderSuccessPage()