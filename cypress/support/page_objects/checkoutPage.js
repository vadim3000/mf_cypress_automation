
export class CheckoutPage{

    addUserValidData(){
        cy.get('[name="checkoutForm:invoiceForename"]')
            .type("VadimTestAutomation")

        cy.get('[name="checkoutForm:invoiceSurname"]')
            .type("GolbanTestAutomation")

        cy.get('[name="checkoutForm:invoiceEmail"]')
            .type("vadim.golban@g.picanova.com")

        cy.wait(1000)
        cy.get('[name="checkoutForm:invoiceStreet"]')
            .type("#reject1")


        cy.get('[name="checkoutForm:invoiceZipCode"]')
            .type("12345")

        cy.get('[name="checkoutForm:invoiceCity"]')
            .type("TEST")

        cy.get('[name="checkoutForm:invoicePhoneNumber"]')
           .type("123456789")

        cy.wait(2000)
        cy.get('[name="checkoutForm:saveInvoice"]')
            .click()
    }

}

export const onCheckoutPage =  new CheckoutPage()

