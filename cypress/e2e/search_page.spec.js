/// <reference types="Cypress" />
import SearchPage from './pageObjects/SearchPage.js'
const searchPage=new SearchPage()

describe("Search page", () => {
  it("empty screen", () => {

    cy.visitAndCloseOnboarding("/search");

    cy.log("Should be shown 20 topics");
    searchPage.getTopicItem().should("have.length", 20);

    cy.log("Go to articles searching");
    cy.visitAuth("/search/articles");

    cy.log("Check the text");
    cy.contains("Enter at least 3 characters and results will appear automatically.");

    cy.log("Go to themes searching");
    cy.visitAuth("/search/topics");

    cy.log("Should be shown 20 topics");
    searchPage.getTopicItem().should("have.length", 20);});

  it("do basic search", () => {
    cy.visitAndCloseOnboarding("/");

    cy.log("Put cursor at search box and press Enter");
    searchPage.getMenuButtonSearch().type("{enter}");

    cy.log("Should be shown 20 topics");
    searchPage.getTopicItem().should("have.length", 20);

    cy.log("Put cursor at search box, type 2 symbols and press Enter");
    cy.get('input[name="q"]')
      .eq(0)
      .type("zz{enter}");

    cy.log("Check the text");
    cy.contains("Enter at least 3 characters and results will appear automatically.");

    cy.log("Clear search box");
    searchPage.getSearchInputClear().click();

    cy.log("Put cursor at search box, type 3 symbols and press Enter");
    cy.get('input[name="q"]')
      .eq(0)
      .type("zyq{enter}");

    cy.log("Check results for Témata");
    searchPage.getResultsTopics().contains("No topics matched your search.");

    cy.log("Check results for Média");
    searchPage.getResultsPublishers().contains("No media matched your search.");
  
  });

});
