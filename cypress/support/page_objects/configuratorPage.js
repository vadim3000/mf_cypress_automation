
export class ConfiguratorPage{

    userClicksOnTheGoTheShoppingcartPage(){

        // 3 The user on the configurator page click on Continue Button
        cy.get("#UploadFileDesktop")
            .click()
        cy.wait(1000)

    }

}

export const onConfiguratorPage = new ConfiguratorPage()
