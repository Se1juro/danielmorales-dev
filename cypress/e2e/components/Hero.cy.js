/* global cy */

describe("Hero text", () => {
  it("Hero view render", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Daniel Morales");
    cy.contains("Fullstack developer");
  });
});
