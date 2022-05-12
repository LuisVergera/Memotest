/// <reference types="Cypress" />

const URL = "http://192.168.56.1:8080";
const CARDS_NUMBER = 12;

context("Memotest", () => {
  before(() => {
    cy.visit(URL);
  });
  it("makes sure there is a board with cards", () => {
    cy.get(".grid").find(".cards").should("have.length", CARDS_NUMBER);
  });
  it("verify that cards get attribute data-id", () => {
    cy.get(".cards").should("have.attr", "data-id");
  });
  it("verify that cards can be clicked", () => {
    cy.get(".cards").click({ multiple: true });
  });
});
