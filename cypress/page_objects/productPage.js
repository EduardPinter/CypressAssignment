class ProductPage {

    get addToCartBtn() { return cy.get("button.btn_inventory")}
    get cartIcon() { return cy.get(".shopping_cart_link")}
    get shoppingBadge() { return cy.get("a.shopping_cart_link > span")}

    // Verifying the element presence and number of products in the cart
    verifyCartBadgeNumber(number){
        this.shoppingBadge.should('have.text',number)
    }

    // Clicking on the "Cart" icon on the Product page
    clickOnTheCart(number){
        this.cartIcon.click()
    }

    // Clicking on the "Add to Cart" button on the Product page
    clickAddToCartButton(){
        this.addToCartBtn.click()
    }

}

export const productPage = new ProductPage()