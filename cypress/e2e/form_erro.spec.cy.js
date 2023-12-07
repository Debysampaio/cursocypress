describe('Formulário de Contato', () => {
    beforeEach(() => {
      cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'); // Substitua pelo caminho real do seu arquivo HTML
    });
  
    it('Deve exibir mensagem de erro ao enviar formulário com campos obrigatórios em branco', () => {
      // Tentar enviar o formulário em branco
    cy.get('button[type="submit"]').click();
        

      // Verificar mensagem de erro
      cy.get('.error').should('be.visible');
    });
  
    // Adicione mais casos de teste conforme necessário
  });
  