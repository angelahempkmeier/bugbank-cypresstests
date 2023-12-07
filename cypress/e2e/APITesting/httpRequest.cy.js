describe("http request", () => {
    it("GET call", () => {
        cy.request('GET', 'https://bugbank.netlify.app/')
        .its('status')
        .should('equal', 200);
    })
});