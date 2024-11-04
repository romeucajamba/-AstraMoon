// Descreve um conjunto de testes end-to-end (E2E) para o componente "App"
describe('App Component E2E Test', () => {

    // Antes de cada teste, carrega a página inicial da aplicação
    beforeEach(() => {
        cy.visit('/'); // Visita a página principal usando caminho relativo
    });
  
    // Teste para verificar se o campo de input é renderizado
    it('should render the input field', () => {
        cy.get('input[placeholder="Search name or nationality"]').should('be.visible'); // Verifica se o input está visível
    });
  
    // Teste para digitar no campo de input e verificar o valor
    it('should type in the input and verify the value', () => {
        const searchTerm = 'Romena Katrich';
        cy.get('input[placeholder="Search name or nationality"]').type(searchTerm); // Digita no input
        cy.get('input[placeholder="Search name or nationality"]').should('have.value', searchTerm); // Verifica o valor completo
    });
  
    // Teste para verificar se os resultados são exibidos com base no termo de busca
    it('should display results based on the search term', () => {
        cy.get('input[placeholder="Search name or nationality"]').type('Romena Katrich');
        cy.get('table').contains('td', 'John').should('be.visible'); // Verifica se um resultado específico aparece
    });
  
    // Teste para verificar a navegação por paginação
    it('should navigate using pagination', () => {
        cy.get('.pagination-button').first().click(); // Clica no primeiro botão de paginação
        cy.url().should('include', 'page=2'); // Verifica se o parâmetro da URL mudou para a página 2
        cy.get('table').should('be.visible'); // Verifica se a tabela ainda está visível após a navegação
    });
  });  