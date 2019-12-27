/* eslint-disable @typescript-eslint/no-namespace */
// declare namespace Cypress {
//   interface Chainable<Subject> {
//     authLogin(): Chainable<Subject>;
//   }
// }

// const COMMAND_DELAY = 2000;
// add delay
// (function addDelay() {
// for (const command of [
//   'visit',
//   'click',
//   'trigger',
//   'type',
//   'clear',
//   'reload',
//   'contains',
// ]) {
//   Cypress.Commands.overwrite(command, (originalFn, ...args) => {
//     const origVal = originalFn(...args);
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(origVal);
//       }, COMMAND_DELAY);
//     });
//   });
// }
// })();

// Cypress.Commands.add("authLogin", () => {
//   cy.setCookie("UID", Cypress.env("auth_token"));
//   cy.server();
//   cy.route("POST", "/api/auth", "fixture:auth.json");
// });
