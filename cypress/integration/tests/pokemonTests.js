import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('Entry to the website', () => {
    cy.visit('https://emblue-qa-challenge.vercel.app/')
})

And('I validate that the website is available {string}', (titleOfPage) =>{
    pokemonPage.elements.titleOfPage().should('have.text', 'Capsule Corp - Tracking System')

})

