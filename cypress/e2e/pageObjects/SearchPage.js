class SearchPage {

getTopicItem() {return cy.findAllByTestId("topic-item")}

getMenuButtonSearch() {return cy.findByTestId("menu-button-search")}

getSearchInputClear() {return cy.findByTestId("search-input-clear")}

getResultsTopics() {return cy.findByTestId("results-topics-empty")}

getResultsPublishers() {return cy.findByTestId("results-publishers-empty")}



}

export default SearchPage;