describe("http request", () => {
    it("GET call", () => {
        cy.request('GET', 'https://bugbank.netlify.app/')
        .its('status')
        .should('equal', 200);
    });
    /*
    it("POST call", () => {
        cy.request({
            method: 'POST', 
            url: 'https://bugbank.netlify.app/',
            body: {}
        })

    });
    */
});