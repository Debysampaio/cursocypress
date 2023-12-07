describe('Central de atendimento ao cliente TAT', function () {

    beforeEach(function () {
      cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'); // Substitua pelo caminho real do seu arquivo HTML
    });
  
    it('Encontra o gato escondido', function () {
      // Preencher os campos obrigatórios
      cy.get('#cat')
        .invoke('show')
        .should('be.visible');

        cy.get('#title')
        .invoke('text', 'CAT TAT')
        cy.get('#subtitle')
        .invoke('text', 'eu amo 💚 cachorros')
    });
  
  });
  
  