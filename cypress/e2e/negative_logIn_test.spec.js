/// <reference types="Cypress" />
import HomePage from '../e2e/pageObjects/HomePage'
import LoginFormPage from '../e2e/pageObjects/LoginFormPage'

describe("Negative Login test ", () => {
    it('Login screen',() => {

    //create objects for that pages 
    const homePage=new HomePage()
    const loginFormPage=new LoginFormPage()

    cy.visitAndCloseOnboarding("/");  

    cy.selectRegistrationAndloginForm();

    cy.log('Click and check Login button');
    loginFormPage.getLoginWithEmailButton().should('contain' , 'Log in with email' ).click();

    cy.checkEmptyLoginInputsAndRequiredFields();

    cy.log('Enter wrong format email');
    loginFormPage.getInputEmail().clear()
    loginFormPage.getInputEmail().type(Cypress.env('invalidEmail')).should('have.value', Cypress.env('invalidEmail'));
    loginFormPage.getLoginWithEmailButton().click();

    cy.log('Check error message');
    loginFormPage.getFormFieldEmail().should('contain', 'Email address is in the wrong format');
    loginFormPage.getInputEmail().clear()

    cy.log('Enter not registered email');
    loginFormPage.getInputEmail().type(Cypress.env('wrongEmail')).should('have.value', Cypress.env('wrongEmail'));

    cy.log('Enter not registered password');
    loginFormPage.getInputPassword().type(Cypress.env('wrongPassword')).should('have.value', Cypress.env('wrongPassword'));

    cy.log('Log in');
    loginFormPage.getLoginWithEmailButton().should('contain', 'Log in with email').click();

    cy.log('Check error message');
    loginFormPage.getFormFieldEmail().should('contain', 'No user with this email exists');
    
    })


})