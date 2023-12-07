describe('Formulário de Contato', () => {
    beforeEach(() => {
      cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html');
    });
  
    it.only('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('#privacy a')
            .invoke('removeAttr','target')
            .click()

        cy.contains('Talking About Testing')
            .should('be.visible')    
        });
    });