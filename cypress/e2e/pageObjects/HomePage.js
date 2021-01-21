class HomePage {

    getUserButton() {return cy.findAllByTestId('menu-button-user')}

    getUserMenu() {return cy.get('[class="rc-tooltip-inner"]')}

    getLogOutButton() {return cy.findAllByTestId('user-menu-logout')}

    getRegistrationAndLoginButton() {return cy.get('[data-testid=user-menu-login]')}

}

export default HomePage;