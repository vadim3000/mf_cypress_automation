
export class confirmOrderPage{

    userClicksOnTheBuyButton(){
        // 8 The user on the confirmorder page and clicks, on the But Button
        cy.get('button[name="checkoutForm:buyNowButton"]')
            .click()
    }

}

export  const onCofirmOrderPage = new confirmOrderPage()