describe('Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'); // Substitua pelo caminho real do seu arquivo HTML
  });

  it('Seleciona um arquivo da pasta fixture', () => {
    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json');
      });
  });
});
