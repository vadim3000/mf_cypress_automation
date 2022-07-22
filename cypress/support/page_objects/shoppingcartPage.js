
export class ShoppingcartPage{

    clickToTheContinueButton(){
        cy.wait(3000)
        cy.get("button[name='shoppingcartForm:proceedToCheckout']")
            .click({force: true})
    }
    // 4 The user on shoppingcaret page, and goes to the LoginCheckout page

}


export const onShoppingcartPage = new ShoppingcartPage()
