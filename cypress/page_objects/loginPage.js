class LoginPage {
    get username(){ return cy.get("#user-name")}
    get password() { return cy.get("#password")}
    get loginBtn() { return cy.get("#login-button")}
    get errorMessage(){ return cy.get("h3[data-test='error']")}
    get errorMessageText(){ return cy.contains("Epic sadface: Sorry, this user has been locked out.")}

    // Type username into the field
    enterUsername(username){
        this.username.clear().type(username)
    }

    // Type password into the field
    enterPassword(pass){
        this.password.clear().type(pass)
    }

    // Clicking on the Login button
    clickLoginBtn(){
        this.loginBtn.click()
    }

    // Verifying the presence of an element(error message)
    isErrorPresent(){
        this.errorMessageText.should('exist')
    }

    verifyTextFromErrorMessage(errorMessage){
        this.errorMessageText.invoke('text').then((text) => {
            expect(text.trim()).equal(errorMessage)
        })
    }
}

export const loginPage = new LoginPage()