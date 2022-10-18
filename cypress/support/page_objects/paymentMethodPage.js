
export class PaymentMethodPage{

    userAddCreditCardCredentials(){
        // 7 The user adds credit card data
        // cy.xpath("//p[normalize-space()='Kreditkarte']")
        cy.get("label").contains("Kreditkarte")
            .click()

        cy.get('input[placeholder="Name auf Karte"]')
            .type("Bijenkorf")

        cy.get('input[placeholder="Kartennummer"]')
            .type("4111 1111 1111 1111")

        cy.get("#cardExpirationMonth")
            .type("03")

        cy.get("#cardExpirationYear")
            .type("30")

        cy.get('input[placeholder=" Kartenprüfnummer"]')
            .type("737")

        cy.wait(1000)
        cy.get('button[type="button"]')
            .contains('Weiter')
            .click()

    }

}

export const onPaymentMethodPage = new PaymentMethodPage()