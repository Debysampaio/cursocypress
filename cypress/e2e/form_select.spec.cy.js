describe('Formulário de Contato', () => {
    beforeEach(() => {
      cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'); // Substitua pelo caminho real do seu arquivo HTML
    });
  
    it('seleciona um produto YouTube por seu texto', () => {
      // Preencher os campos obrigatórios
        cy.get('#product').select('YouTube').should('have.value', 'youtube');
      
    });

    it('seleciona um produto Mentoria por seu valor value', () => {
        // Preencher os campos obrigatórios
       cy.get('#product').select('Mentoria').should('have.value', 'mentoria');
        
    });

    it('seleciona um produto Blog por seu índice', () => {
        // Preencher os campos obrigatórios
        cy.get('select').select(3).should('have.value', 'mentoria')
        
    });


  
  });
  