const URL = "http://192.168.56.1:8080";

context("Memotest", () => {
  before(() => {
    cy.visit(URL);
  });
  it("test", () => {});
});
