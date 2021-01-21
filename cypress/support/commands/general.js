import HomePage from "../../e2e/pageObjects/HomePage";
import LoginFormPage from "../../e2e/pageObjects/LoginFormPage";
const homePage = new HomePage()
const loginFormPage = new LoginFormPage

Cypress.Commands.add("visitAndCloseOnboarding", (url, options = undefined) => {
  cy.visit(`${url}`, {
    auth: {
      username: "admin",
      password: "EeRJrcLYJKPCjDBueeQmeIvqlTvWOa",
    },
    ...options,
  });
  cy.get("[data-testid='onboarding-close']").click();
});

Cypress.Commands.add("visitAuth", (url, options = undefined) => {
  cy.visit(`${url}`, {
    auth: {
      username: "admin",
      password: "EeRJrcLYJKPCjDBueeQmeIvqlTvWOa",
    },
    ...options,
  });
});

Cypress.Commands.add("selectRegistrationAndloginForm", () => {
  
  cy.log("Click on user icon");
  homePage.getUserButton().click()

  cy.log("Select and check Registration and login text");
  homePage.getRegistrationAndLoginButton().contains('Registration and login')

  cy.log("Click on Registration and login button");
  homePage.getRegistrationAndLoginButton().click()

  cy.log('Select and check Log in with email text');
  loginFormPage.getLoginWithEmailButton().contains('Log in with email');

  cy.log('Click on Log in with email button');
  loginFormPage.getLoginWithEmailButton().click();
});

Cypress.Commands.add("checkEmptyLoginInputsAndRequiredFields", () => {
  cy.log('Empty login - Check required field information');
    loginFormPage.getFormFieldEmail().should('contain', 'Fields are required');
    loginFormPage.getFormFieldPassword().should('contain', 'Fields are required');
    loginFormPage.getInputEmail().type(Cypress.env('wrongEmail')).should('have.value', Cypress.env('wrongEmail'));
    loginFormPage.getFormFieldPassword().should('contain', 'Fields are required');
    loginFormPage.getInputEmail().clear()
    loginFormPage.getInputPassword().type(Cypress.env('wrongPassword')).should('have.value', Cypress.env('wrongPassword'));
    loginFormPage.getFormFieldEmail().should('contain', 'Fields are required');
    loginFormPage.getInputPassword().clear();

});

// Search elements without page objects pattern
Cypress.Commands.add("checkLogInForm", () => {
  cy.get('[data-testid="back-link-button"]').should('contain' ,'Back').click()
  cy.findAllByTestId('button-login').should('contain' , 'Log in with email' ).click();
  cy.findAllByTestId('reset-password-button').should('contain', 'Forgotten password').click();
  cy.findAllByTestId('back-link-button').should('contain','Back to login').click();
  cy.findAllByTestId('dialog-close-button').click()

});