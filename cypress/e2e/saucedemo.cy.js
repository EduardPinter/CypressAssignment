/// <reference types="Cypress" />

import { faker } from "@faker-js/faker"
import { loginPage } from '../page_objects/loginPage'
import { allProductsPage } from '../page_objects/allProductsPage'
import { productPage } from '../page_objects/productPage'
import { cartPage } from '../page_objects/cartPage'
import { checkoutPage } from '../page_objects/checkoutPage'
const data = require("../fixtures/data.json")

describe("Locked out user", ()=> {

    before(()=> {
        cy.visit("/")
    })
    
    it("Login with credentials", ()=>{
        loginPage.enterUsername(data.saucedemo.locked_out_user)
        loginPage.enterPassword(data.saucedemo.password)
        loginPage.clickLoginBtn()
        
    })

    it("Verify that the error message is present", ()=>{
        loginPage.isErrorPresent()
    })

    it("Verify the text of the error message", ()=>{
        loginPage.verifyTextFromErrorMessage("message")
    })



})

describe("Ordering products", ()=> {

    before(()=> {
        cy.visit("/")
    })
    
    it("Login with credentials", ()=>{
        loginPage.enterUsername(data.saucedemo.standard_user)
        loginPage.enterPassword(data.saucedemo.password)
        loginPage.clickLoginBtn()
        
    })

    it("Verify that the right page loaded in and that there are products present", ()=>{
        allProductsPage.verifyThatTheRightPageLoadedIn(6)
    })

    it("Add item to the cart", ()=>{
        allProductsPage.clickOnTheProductAddToCartByIndexNumber(0)

    })

    it("Verify that the cart badge is updated correctly", ()=>{
        allProductsPage.verifyCartBadgeNumber("1")
    })

    it("Open another item's details page", ()=>{
        allProductsPage.clickOnTheProductLinkByIndexNumber(1)
    })

    it("Add the item to the cart", ()=>{
        productPage.clickAddToCartButton()
    })

    it("Open the cart", ()=>{
        productPage.clickOnTheCart(2)
    })

    it("Verify that the correct items are present", ()=>{
        cartPage.verifyNumberOfProducts(2)
        cartPage.verifyNameOfProductByIndex(0,data.saucedemo.dataStrings.productOne)
        cartPage.verifyNameOfProductByIndex(1,data.saucedemo.dataStrings.productTwo)
    })

    it("Remove the first item from the cart", ()=>{
        cartPage.clickRemoveProductByIndexNumber(0)
    })

    it("Verify that the correct items are present", ()=>{
        cartPage.verifyNumberOfProducts(1)
    })

    it("Continue to checkout page", ()=>{
        cartPage.clickOnTheCheckoutBtn()
    })

    it("Complete the checkout form", ()=>{
        checkoutPage.typeFirstName(faker.person.firstName())
        checkoutPage.typeLastName(faker.person.lastName())
        checkoutPage.typeZipCode(faker.number.int())
        checkoutPage.clickContinueBtn()
    })

    it("Complete the order", ()=>{
        checkoutPage.clickFinishBtn()
    })

    it("Verify that the order is completed successfully with the displayed message", ()=>{
        checkoutPage.verifyThatOrderIsComplete()
        checkoutPage.verifyThatTheCorrectTextIsPresentAfterCompleteOrder(data.saucedemo.dataStrings.orderComplete)
    })

})