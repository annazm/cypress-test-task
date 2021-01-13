describe("Search page", () => {
  it("empty screen", () => {
    cy.visitAndCloseOnboarding("/search");

    cy.log("Should be shown 20 topics");
    cy.findAllByTestId("topic-item").should("have.length", 20);

    cy.log("Go to articles searching");
    cy.visitAuth("/search/articles");

    cy.log("Check the text");
    cy.contains(
      "Enter at least 3 characters and results will appear automatically."
    );

    cy.log("Go to themes searching");
    cy.visitAuth("/search/topics");

    cy.log("Should be shown 20 topics");
    cy.findAllByTestId("topic-item").should("have.length", 20);
  });

  it("do basic search", () => {
    cy.visitAndCloseOnboarding("/");

    cy.log("Put cursor at search box and press Enter");
    cy.findByTestId("menu-button-search").type("{enter}");

    cy.log("Should be shown 20 topics");
    cy.findAllByTestId("topic-item").should("have.length", 20);

    cy.log("Put cursor at search box, type 2 symbols and press Enter");
    cy.get('input[name="q"]')
      .eq(0)
      .type("zz{enter}");

    cy.log("Check the text");
    cy.contains(
      "Enter at least 3 characters and results will appear automatically."
    );

    cy.log("Clear search box");
    cy.findByTestId("search-input-clear").click();

    cy.log("Put cursor at search box, type 3 symbols and press Enter");
    cy.get('input[name="q"]')
      .eq(0)
      .type("zyq{enter}");

    cy.log("Check results for Témata");
    cy.findByTestId("results-topics-empty").contains(
      "No topics matched your search."
    );

    cy.log("Check results for Média");
    cy.findByTestId("results-publishers-empty").contains(
      "No media matched your search."
    );
  });
});
