it('Testa a página da política de privacidade de forma independente', () => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/privacy.html')

    cy.contains('Talking About Testing')
    .should('be.visible')    
});