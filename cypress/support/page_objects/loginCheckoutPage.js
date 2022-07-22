
export class LoginCheckoutPage{

    clickToTheContinueToCheckoutBtn() {
        // 5 The user on  LoginCheckout page and goes to the checkout page
        cy.wait(1000)
        cy.get("a").contains('Weiter zur Kasse')
            .click({force: true})
     }

}

export const onLoginCheckoutPage = new LoginCheckoutPage()