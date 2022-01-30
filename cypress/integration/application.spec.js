describe("Web Application Tests", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Should render correctly", () => {
        cy.get(".application-container").should("exist");
    });

    it("Should have a title", () => {
        cy.get("#title").should("have.text", "Prime Multiplication Table");
    });

    it("Should have a working input box", () => {
        const newInput = "50";
        cy.get("#input-box").type(`${newInput}{enter}`);
        cy.get("#input-box").should("have.value", "50");
    });

    it("Should clear input if invalid input is submitted", () => {
        const newInput = "0";
        cy.get("#input-box").type(`${newInput}{enter}`);
        cy.get("#submit-button").click();
        cy.get("#input-box").should("have.value", "");
    });

});
