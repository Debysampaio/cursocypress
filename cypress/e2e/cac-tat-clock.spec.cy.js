describe('Formulário de Contato', () => {
    beforeEach(() => {
      cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'); // Substitua pelo caminho real do seu arquivo HTML
    });
  
    it('Preenche os campos obrigatórios e envia o formulário', function () {
      const longText = 'Teste,teste,teste,teste,teste,teste,teste,teste,teste';
  
      cy.clock();
  
      // Preencher os campos obrigatórios
      cy.get('#firstName').type('João');
      cy.get('#lastName').type('Silva');
      cy.get('#email').type('joao.silva@example.com');
      cy.get('#phone').type('123456789');
      cy.get('#product').select('Blog');
      cy.get('input[name="atendimento-tat"][value="ajuda"]').check();
      cy.get('#email-checkbox').check();
      cy.get('#open-text-area').type(longText, { delay: 0 });
      cy.contains('button', 'Enviar').click();
  
      // Enviar o formulário
      cy.get('.success').should('be.visible');

      cy.tick(3000);  

      // Verificar mensagem de sucesso
      cy.get('.success').should('not.be.visible');
    });
  });
  