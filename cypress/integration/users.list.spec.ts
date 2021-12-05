/**
 */
describe('Users list', () => {
  it('visits the /users page', () => {
    cy.visit('/users');
    cy.contains('nav works');
    cy.contains('List works!');
    cy.contains('footer works');
    // ER moet een tabel met 3 users zijn
    cy.get('table.table.table-striped.table-hover tbody')
      .children()
      .should('have.length', 3);
    cy.contains('Eerste User');
    cy.contains('Tweede User');
    cy.contains('Derde User');
  });
});
