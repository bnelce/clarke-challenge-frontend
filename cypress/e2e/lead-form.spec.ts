describe("Lead form", () => {
  beforeEach(() => {
    cy.visit("/lead");
  });

  it("should show an error message", () => {
    cy.get('input[name="consumo"]').type("");

    cy.get('button[type="submit"]').click();
  });

  it("should show an error message", () => {
    cy.get('input[name="consumo"]').type("a");

    cy.get('button[type="submit"]').click();
  });

  it("should submit the form", () => {
    cy.get('input[name="consumo"]').type("10000");

    cy.get('button[type="submit"]').click();
  });
});
