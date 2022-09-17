/// <reference types="cypress"/>
/// <reference types=”cypress-xpath” />


import {onMixpixLP} from "../../../support/page_objects/Products/mixpixLP"
import {onUploadImage} from "../../../support/page_objects/uploadImage";
import {onConfiguratorPage} from "../../../support/page_objects/configuratorPage";
import {onShoppingcartPage} from "../../../support/page_objects/shoppingcartPage";
import {onLoginCheckoutPage} from "../../../support/page_objects/loginCheckoutPage";
import {onCheckoutPage} from "../../../support/page_objects/checkoutPage";
import {onPaymentMethodPage} from "../../../support/page_objects/paymentMethodPage";
import {onCofirmOrderPage} from "../../../support/page_objects/confirmOrderPage";



describe('Test on mf mixpix', () => {

    // beforeEach('open homepage', ()=> {
    //     cy.openHomePage()
    // })

    it('Full user purchase journey with a MixPix Product', () => {

        // cy.viewport(320, 480)
        // cy.viewport('iphone-x')

        //1 The user on the mixPix LP page, accepts cookies and uploads an image
        onMixpixLP.userOnMixpixLPAcceptsTheCokkies()

        //2 The userUpload an Image
        onUploadImage.userUploadsAnImage()

        //3
        onConfiguratorPage.userOnMultiuploadConfiguratorAndClicksGoTheShoppingcartPage()


        // 4 The user on shoppingcaret page, and goes to the LoginCheckout page
        onShoppingcartPage.clickToTheContinueButton()

        // 5 The user on  LoginCheckout page and goes to the checkout page
        onLoginCheckoutPage.clickToTheContinueToCheckoutBtn()

        // 6 The user on the Checkout page add his data
        onCheckoutPage.addUserValidData()

        // 7 The user adds credit card data
        onPaymentMethodPage.userAddCreditCardCredentials()

        // 8 The user on the confirmorder page and clicks, on the But Button
        onCofirmOrderPage.userClicksOnTheBuyButton()



    })



})
