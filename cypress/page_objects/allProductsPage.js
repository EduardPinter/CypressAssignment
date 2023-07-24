class AllProductsPage {
    get products(){ return cy.get(".inventory_item")}
    get addToCartButton() { return cy.contains("Add to cart")}
    get shoppingBadge() { return cy.get("a.shopping_cart_link > span")}
    get productName(){ return cy.get("div.inventory_item_name")}

    // verification of page loading in as we look for products on the landing page
    verifyThatTheRightPageLoadedIn(number){
        this.products.should('have.length', number)
    }

    // Clicking on the 'Add to Cart' button on the specific product aimed by the index number in the list
    clickOnTheProductAddToCartByIndexNumber(number){
        this.addToCartButton.eq(number).click()
        cy.get(this.shoppingBadge)
    }

    // Clicking on the specific product by index number
    clickOnTheProductLinkByIndexNumber(number){
        this.productName.eq(number).click()
    }

    getNameFromProductByIndex(number){
        this.productName.eq(number).then(function($elem) {
            cy.log($elem.text())
        })
    }

    // Verifying the element presence and number of products in the cart
    verifyCartBadgeNumber(number){
        this.shoppingBadge.should('have.text',number)
    }
}

export const allProductsPage = new AllProductsPage()