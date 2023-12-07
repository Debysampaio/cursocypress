describe('Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'); // Substitua pelo caminho real do seu arquivo HTML
  });

  it('Marca ambos checkboxes e depois desmarca o ultimo ', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')

    });

});
