describe('Header Component E2E Test', () => {
    beforeEach(() => {

      cy.visit('/');
    });
  
    it('should render the header with user information', () => {

      cy.contains('h1', 'My dashboard').should('be.visible');
  
      cy.contains('p', "Welcome back user, let's go").should('be.visible');
  
      cy.contains('p', 'Romeu Cajamba').should('be.visible');
  
      cy.contains('span', 'romeucajamba@gmail.com').should('be.visible');
  
      cy.get('img[alt="user avatar"]').should('be.visible')
        .and('have.attr', 'src', 'https://avatars.githubusercontent.com/u/117159526?v=4');
    });
  });
  