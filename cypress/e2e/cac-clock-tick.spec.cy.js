describe('Central de atendimento ao cliente TAT', function () {
    const THREE_SECONDS_IN_MS = 3000;
    const longText = 'Teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste';
  
    beforeEach(function () {
      cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'); // Substitua pelo caminho real do seu arquivo HTML
    });
  
    it('Verifica o titulo da aplicação', function () {
      cy.title().should('be.equal', 'Central de atendimento ao cliente TAT');
    });
  
    it('Preenche os campos obrigatórios e envia o formulário', function () {
      cy.clock();
  
      // Preencher os campos obrigatórios
      cy.get('#firstName').type('João');
      cy.get('#lastName').type('Silva');
      cy.get('#email').type('joao.silva@example.com');
      cy.get('#phone').type('123456789');
      cy.get('#product').select('Blog');
      cy.get('input[name="atendimento-tat"][value="ajuda"]').check();
      cy.get('#email-checkbox').check();
      cy.get('#open-text-area').type(longText);
  
      cy.contains('button', 'Enviar').click();
  
      // Enviar o formulário
      cy.get('.success').should('be.visible');
  
      cy.tick(THREE_SECONDS_IN_MS);
  
      // Verificar mensagem de sucesso
      cy.get('.success').should('not.be.visible');
    });
  
    it.only('Exibe mensagem de erro ao submeter o formulário com um email de formatação', () => {
      cy.clock();
  
      // Preencher os campos obrigatórios
      cy.get('#firstName').type('João');
      cy.get('#lastName').type('Silva');
      cy.get('#email').type('joao.silva@example.com');
      cy.get('#phone').type('123456789');
      cy.get('#product').select('Blog');
      cy.get('input[name="atendimento-tat"][value="ajuda"]').check();
      cy.get('#email-checkbox').check();
      cy.get('#open-text-area').type(longText);
  
      cy.contains('button', 'Enviar').click();
  
      // Enviar o formulário
      cy.get('.success').should('be.visible');
  
      cy.tick(THREE_SECONDS_IN_MS);
  
      // Verificar mensagem de sucesso
      cy.get('.success').should('not.be.visible');
    });
  });
  