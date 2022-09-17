/// <reference types="cypress"/>
/// <reference types=”cypress-xpath” />


describe('Test on configurator page', () =>  {

    it('The user uploads an image', () => {
        cy.xpath('//div[@class="upload-button"]//input[@type="file"]')
            .attachFile("test_image_1.jpg")
        cy.wait(2000)
    })
})