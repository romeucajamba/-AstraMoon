// Descreve um conjunto de testes end-to-end (E2E) para o componente "App"
describe('App Component E2E Test', () => {
    
  // Antes de cada teste, a aplicação é carregada no navegador com a URL especificada
  beforeEach(() => {
      cy.visit('http://localhost:3000'); // Visita a página principal da aplicação
  });

  // Teste para verificar se o campo de input é renderizado corretamente na página
  it('should render the input field', () => {
      // Procura um elemento de input com o placeholder específico e verifica se está visível
      cy.get('input[placeholder="Search name or nationality"]').should('be.visible');
  });

  // Teste para verificar se é possível digitar no campo de input e se o valor digitado está correto
  it('should type in the input and verify the value', () => {
      // Digita um nome específico no campo de input
      cy.get('input[placeholder="Search name or nationality"]').type('Romena Katrich');
      // Verifica se o valor no campo de input corresponde ao que foi digitado
      cy.get('input[placeholder="Search name or nationality"]').should('have.value', 'Romena');
  });

  // Teste para verificar se a busca exibe resultados baseados no termo digitado
  it('should display results based on the search term', () => {
      // Digita um termo de busca no campo de input
      cy.get('input[placeholder="Search name or nationality"]').type('Romena Katrich');
      // Verifica se a tabela contém um resultado esperado e está visível
      cy.get('table').contains('td', 'John').should('be.visible');
  });

  // Teste para verificar a navegação usando a paginação
  it('should navigate using pagination', () => {
      // Clica no primeiro botão de paginação (assumindo que existe uma classe 'pagination-button')
      cy.get('.pagination-button').first().click();
      // Verifica se a URL inclui o parâmetro de página esperado após a navegação
      cy.url().should('include', 'page=2'); 
  });
});
