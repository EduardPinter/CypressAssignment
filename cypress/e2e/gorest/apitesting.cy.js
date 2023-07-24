import { faker } from "@faker-js/faker"

const randomNameAndLastName = faker.person.firstName + faker.person.lastName();
const randomEmail = faker.internet.email();
const randomGender = faker.person.sex();
var randomGenderOpposite;
let userId;

var token = "0a2ddfbe7d25f0afd16fc04dd8c3abc3510941caca5525409c67aa74b991279c"

describe("Api testing", ()=> {

    it("Get user details", ()=> {
        cy.request("GET", "https://gorest.co.in/public/v2/users")
        .its('body')

    })

    it("Create a user", ()=>{
        cy.request( {
            method:"POST", 
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: {
                email: randomEmail,
                gender: randomGender,
                name: randomNameAndLastName,
                status: "inactive"
                }
            }).then((response) => {
                userId = response.body.id;
                cy.log("Created user with an id : " + userId)
                expect (response.status).to.equal(201)
            })    
    })

    it("Update user details", ()=>{
        if(randomGender==="male"){
            randomGenderOpposite="female";
        }else
        randomGenderOpposite="male";
        cy.request( {
            method:"PUT", 
            url: "https://gorest.co.in/public/v2/users/" + userId,
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: {
                    gender: randomGenderOpposite
                }
            }).its('status').should('equal', 200)
    })

    it("Delete a user", ()=>{

        cy.request( {
            method:"DELETE", 
            url: "https://gorest.co.in/public/v2/users/" + userId,
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: {
                    
                }
            }).its('status').should('equal', 204)
    })



})