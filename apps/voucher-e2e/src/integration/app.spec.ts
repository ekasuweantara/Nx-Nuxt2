// describe('voucher', () => {
//   it('should display welcome message', () => {
//     cy.visit('/');
//     cy.contains('h2', 'Welcome to your Nuxt Application');
//   });
// });

describe('voucher', () => {
  it('should display button list', () => {
    cy.visit('/');
    cy.contains('button', 'Button');
  });
});