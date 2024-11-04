// Descreve um conjunto de testes end-to-end (E2E) para o componente "Header"
describe('Header Component E2E Test', () => {

  // Antes de cada teste, a página principal da aplicação é carregada
  beforeEach(() => {
      cy.visit('/'); // Visita a URL da raiz da aplicação
  });

  // Teste para verificar se o cabeçalho é renderizado corretamente com as informações do usuário
  it('should render the header with user information', () => {

      // Verifica se o título "My dashboard" está visível na página
      cy.contains('h1', 'My dashboard').should('be.visible');

      // Verifica se o parágrafo com a mensagem de boas-vindas está visível
      cy.contains('p', "Welcome back user, let's go").should('be.visible');

      // Verifica se o nome do usuário "Romeu Cajamba" está visível na página
      cy.contains('p', 'Romeu Cajamba').should('be.visible');

      // Verifica se o e-mail do usuário está visível na página
      cy.contains('span', 'romeucajamba@gmail.com').should('be.visible');

      // Verifica se a imagem do avatar do usuário está visível e se possui o atributo `src` correto
      cy.get('img[alt="user avatar"]').should('be.visible')
          .and('have.attr', 'src', 'https://avatars.githubusercontent.com/u/117159526?v=4');
  });
});