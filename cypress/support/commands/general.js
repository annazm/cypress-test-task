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
