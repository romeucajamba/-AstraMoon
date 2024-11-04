// Descreve um conjunto de testes end-to-end (E2E) para o componente "Header"
describe('Header Component E2E Test', () => {

  // Antes de cada teste, a página principal da aplicação é carregada
  beforeEach(() => {
      cy.visit('/'); // Visita a URL da raiz da aplicação
  });

  // Teste para verificar se o cabeçalho é renderizado corretamente com as informações do usuário
  it('should render the header with user information', () => {

      // Verifica se o cabeçalho está visível e contém o título correto
      cy.get('h1').should('be.visible').and('contain', 'AstroMoo');

      // Verifica se o parágrafo de boas-vindas está visível
      cy.get('p').contains("Welcome back").should('be.visible');

      // Verifica se o nome do usuário está visível
      cy.get('p').contains('Romeu Cajamba').should('be.visible');

      // Verifica se o e-mail do usuário está visível
      cy.get('span').contains('romeucajamba@gmail.com').should('be.visible');

      // Verifica se a imagem do avatar do usuário está visível e se possui o atributo `src` correto
      cy.get('img[alt="user avatar"]').should('be.visible')
        .and('have.attr', 'src', 'https://avatars.githubusercontent.com/u/117159526?v=4');
  });
});