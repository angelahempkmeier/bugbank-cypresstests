describe('Login test', () => {
    it('must do the login successfully', () => {
        cy.visit('https://bugbank.netlify.app/');
        cy.get('.input__default')
        .first()
        .should('be.visible')
        .type('angela@teste.com');

        cy.get('.input__default[type="password"]')
        .first()
        .should('be.visible')
        .type('123');

        cy.get('.style__ContainerButton-sc-1wsixal-0')
        .first()
        .click();

        cy.get('.errorMessage')
        .should('not.exist');
    });
});