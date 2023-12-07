describe('Formulário de Contato', () => {
    beforeEach(() => {
      cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html');
    });
  
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
      cy.fixture('example.json').as('samplefile');
      cy.get('input[type="file"]')
        .selectFile('@samplefile')
        .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json');
        });
    });
  });
  
  