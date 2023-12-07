describe('Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'); // Substitua pelo caminho real do seu arquivo HTML
  });

  it('Deve preencher o formulário corretamente e enviar com sucesso', () => {
    // Preencher os campos obrigatórios
    cy.get('#firstName').type('João');
    cy.get('#lastName').type('Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#phone').type('123456789');
    cy.get('#product').select('Blog');
    cy.get('input[name="atendimento-tat"][value="ajuda"]').check();
    cy.get('#email-checkbox').check();
    cy.get('#open-text-area').type('Preciso de ajuda com o meu blog, help me!');
    
    
    // Enviar o formulário
    cy.get('button[type="submit"]').click();

    // Verificar mensagem de sucesso
    cy.get('.success').should('be.visible');
  });

});
