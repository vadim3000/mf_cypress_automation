


export class canvasLP{

    userOnCanvasLPAccreptsThecokkies(){
        // 1 The user on the canvas LP page, accepts cokkies and uplaod an image
        cy.visit('https://www.meinfoto.de/foto-in-gross/foto-auf-leinwand.jsf')
        cy.wait(500)
        cy.get("span.cf1y60").contains('Alle akzeptieren')
            .click()
        cy.wait(500)
    }

}


export const onCanvasLp = new canvasLP()