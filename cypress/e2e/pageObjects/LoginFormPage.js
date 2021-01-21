
class LoginFormPage {

getLoginWithEmailButton() {return cy.get('[data-testid=button-login]')}

getLoginForm() {return cy.get('[data-testid=login-form]')}

getInputEmail() {return cy.get('[data-testid=input-email]')}

getInputPassword() {return cy.get('[data-testid=input-password]')}

//Empty fields error message under inputs
getFormFieldEmail() {return cy.findAllByTestId('form-field-email')}
getFormFieldPassword() {return cy.findAllByTestId('form-field-password')}

getEyeIcon() {return cy.get('[data-icon-id="eye"]')}

getCloseEyeIcon() {return cy.get('[data-icon-id="eye-close"]')}
    
}

export default LoginFormPage;