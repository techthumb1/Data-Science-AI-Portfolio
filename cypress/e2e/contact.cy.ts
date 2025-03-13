describe("Contact Page", () => {
    beforeEach(() => {
      cy.visit("/contact");
    });
  
    it("should display the contact form", () => {
      cy.get("[data-testid=contact-form]").should("exist");
    });
  
    it("should allow user to fill out and submit the form", () => {
      cy.get("[data-testid=name-input]").type("John Doe");
      cy.get("[data-testid=email-input]").type("john.doe@example.com");
      cy.get("[data-testid=message-textarea]").type("This is a test message.");
      cy.get("[data-testid=submit-button]").click();
      cy.get("[data-testid=success-message]").should("be.visible");
    });
  });
  