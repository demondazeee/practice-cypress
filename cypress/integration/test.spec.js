/// <reference types="cypress" />


describe("Test Suite", () =>{
    before(() =>{
        cy.visit("https://the-internet.herokuapp.com/login")
    })

   it("authentication", () => {
    
    cy.get("[id=login]").within(() =>{
        cy.get("[id=username]").type("tomsmith")

        cy.get("[id=password]").type("SuperSecretPassword!")


        cy.get("[type=submit]").click()
    })
   })

   it("should verify if it's logged in", () =>{
       cy.get(".flash.success").contains("You logged into a secure area!")
   })

   it("should verify if it's logout", () =>{
       cy.get(".button.secondary.radius").click()

       cy.get(".flash.success").contains("You logged out of the secure area!")
   })

   after(() =>{
        cy.log("User logged out")
   })
})