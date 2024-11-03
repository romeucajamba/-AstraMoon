describe('Should be able to render list', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should render the input field', () => {
      cy.get('input[placeholder="Search name or nationality"]').should('be.visible');
    });
  
    it('should type in the input and verify the value', () => {
      cy.get('input[placeholder="Search name or nationality"]').type('Romena');
      cy.get('input[placeholder="Search name or nationality"]').should('have.value', 'Romena');
    });
  
    it('should display results based on the search term', () => {
      cy.get('input[placeholder="Search name or nationality"]').type('Romena Katrich');
      cy.get('table').contains('td', 'John').should('be.visible');
    });
  
    it('should navigate using pagination', () => {
      cy.get('.pagination-button').first().click();
      cy.url().should('include', 'page=2'); 
    });
  });
  