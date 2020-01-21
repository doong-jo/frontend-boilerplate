/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Cypress {
  interface Chainable<Subject> {
    authLogin(): Chainable<Subject>;
  }
}

Cypress.Commands.add('customCommand', () => {
  cy.setCookie('UID', Cypress.env('auth_token'));
  cy.server();
  cy.route('POST', '/api/auth', 'fixture:auth.json');
});
