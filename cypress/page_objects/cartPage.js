class CartPage {
    get products(){ return cy.get(".cart_item")}
    get productName() { return cy.get(".inventory_item_name")}
    get removeButton() { return cy.get(".cart_button")}
    get shoppingBadge() { return cy.get("a.shopping_cart_link > span")}
    get checkoutBtn() { return cy.get("#checkout")}


    // Verify the number of products added to the cart
    verifyNumberOfProducts(number){
        this.products.should('have.length', number)
    }

    // Click on the "Checkout" button
    clickOnTheCheckoutBtn(){
        this.checkoutBtn.click()
    }

    // Click on the "Remove" button on the product 
    clickRemoveProductByIndexNumber(number){
        this.removeButton.eq(number).click()
    }

    // Verify the names of the added products in the Cart
    verifyNameOfProductByIndex(number, name){
        this.productName.eq(number).should("have.text", name)
    }

}

export const cartPage = new CartPage()