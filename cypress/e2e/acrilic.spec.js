/// <reference types="cypress"/>
/// <reference types=”cypress-xpath” />

import {onShoppingcartPage} from "../support/page_objects/shoppingcartPage"
import {onLoginCheckoutPage} from "../support/page_objects/loginCheckoutPage"
import {onCheckoutPage} from "../support/page_objects/checkoutPage";
import {onPaymentMethodPage} from "../support/page_objects/paymentMethodPage"
import {onConfiguratorPage} from "../support/page_objects/configuratorPage";
import {onCofirmOrderPage} from "../support/page_objects/confirmOrderPage";
import {onUploadImage} from "../support/page_objects/uploadImage";
import {onAcrilicLP} from "../support/page_objects/Products/acrilicLP";

describe('Test on mf acrilic', () =>  {

    // beforeEach('open homepage', ()=> {
    //     cy.openHomePage()
    // })

    // afterEach('close site', () =>{
    //     close()
    // })

    it('Full user purchase journey with a Acrilic Product', () => {

        // // 1 The user on the canvas LP page, accepts cokkies and uploads an image
        onAcrilicLP.userOnAcrilicLPAccreptsThecokkies()

        //2 The userUpload an Image
        onUploadImage.userUploadsAnImage()

        // 3 The user uploads an image
        onConfiguratorPage.userClicksOnTheGoTheShoppingcartPage()

        // 3 The user on shoppingcaret page, and goes to the LoginCheckout page
        onShoppingcartPage.clickToTheContinueButton()

        // 4 The user on  LoginCheckout page and goes to the checkout page
        onLoginCheckoutPage.clickToTheContinueToCheckoutBtn()

        // 5 The user on the Checkout page add his data
        onCheckoutPage.addUserValidData()

        // 6 The user adds credit card data
        onPaymentMethodPage.userAddCreditCardCredentials()

        // 8 The user on the confirmorder page and clicks, on the But Button
        // onCofirmOrderPage.userClicksOnTheBuyButton()
    })
})