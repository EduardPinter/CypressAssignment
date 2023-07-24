class CheckoutPage {
    get firstname(){ return cy.get("#first-name")}
    get lastname() { return cy.get("#last-name")}
    get zipcode() { return cy.get("#postal-code")}
    get continueBtn() { return cy.get("#continue")}
    get finishBtn(){ return cy.get("#finish")}
    get orderComplete() {return cy.get("img.pony_express")}
    get completeOrderText() {return cy.get("#checkout_complete_container > h2")}


    // Type first name into the field
    typeFirstName(name){
        this.firstname.clear().type(name)
    }

    // Type last name into the field
    typeLastName(name){
        this.lastname.clear().type(name)
    }

    // Type zip/postal code into the field
    typeZipCode(number){
        this.zipcode.clear().type(number)
    }

    // Clicking on the "Continue" button
    clickContinueBtn(){
        this.continueBtn.click()
    }

    // Clicking on the "Finish" button
    clickFinishBtn(){
        this.finishBtn.click()
    }

    // Verify that the successful icon is present on the page
    verifyThatOrderIsComplete(){
        this.orderComplete.should("exist")
    }

    // Verify that the text for confirmed order is present on the page
    verifyThatTheCorrectTextIsPresentAfterCompleteOrder(text){
        this.completeOrderText.contains(text).should("exist")
    }

}

export const checkoutPage = new CheckoutPage()