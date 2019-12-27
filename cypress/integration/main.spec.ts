/// <reference types="Cypress" />

context('main', () => {
  it('visit successfully', () => {
    cy.visit('/');
  });
});
