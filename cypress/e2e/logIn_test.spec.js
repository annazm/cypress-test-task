/// <reference types="Cypress" />
import HomePage from '../e2e/pageObjects/HomePage'
import LoginFormPage from '../e2e/pageObjects/LoginFormPage'

describe("Positive Login test ", function() {
    it("Login and Logout", function() {

    //create objects for that pages 
    const homePage=new HomePage()
    const loginFormPage=new LoginFormPage()

    cy.visitAndCloseOnboarding("/");  

    cy.selectRegistrationAndloginForm();

    cy.log('Select and check Log in with email text on Registration and login page and click on it');
    loginFormPage.getLoginWithEmailButton().contains('Log in with email').click();

    cy.log('Click and check Login button on Login page');
    loginFormPage.getLoginWithEmailButton().should('contain' , 'Log in with email' ).click();

    cy.log('Functional elements of login form');
    cy.checkLogInForm();

    cy.selectRegistrationAndloginForm();

    cy.log('Check if login form contains email and password attributes and placeholder');
    loginFormPage.getLoginForm().within(() => {

        loginFormPage.getInputEmail().should('have.attr', 'placeholder', 'Email');
        loginFormPage.getInputPassword().should('have.attr', 'placeholder', 'Password');

      })

    cy.log('Fill in email');
    loginFormPage.getInputEmail().type(Cypress.env('email')).should('have.value', Cypress.env('email'));

    cy.log('Fill in password');
    loginFormPage.getInputPassword().type(Cypress.env('password')).should('have.value', Cypress.env('password'));

    cy.log('Click 2x on Eye button');
    loginFormPage.getEyeIcon().click();
    loginFormPage.getCloseEyeIcon().click();
    
    cy.log('Log in')
    loginFormPage.getLoginWithEmailButton().should('contain', 'Log in with email').click();

    cy.log("Click on user icon");
    cy.wait(5000);
    homePage.getUserButton().click();

    cy.log('Verify logged in user');
    homePage.getUserMenu().should('contain', Cypress.env('accountName'));
    homePage.getUserMenu().should('contain', Cypress.env('email'));

    cy.log('Click Log out');
    homePage.getLogOutButton().should('contain','Log out').click()

    })
})