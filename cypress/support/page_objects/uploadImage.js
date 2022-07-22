
export class uploadImage{

    userUploadsAnImage(){
        //cy.xpath('//div[@class="upload-button"]//input[@type="file"]')
        cy.get("input[type='file']")
            .attachFile("test_image_1.jpg")
        cy.wait(2000)
    }

}

export const onUploadImage = new uploadImage()