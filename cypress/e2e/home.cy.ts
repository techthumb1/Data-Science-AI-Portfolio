describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should display the hero section", () => {
      cy.get("[data-testid=hero]").should("exist");
    });
  
    it("should navigate to projects page", () => {
      cy.get("[data-testid=projects-link]").click();
      cy.url().should("include", "/projects");
    });
  
    it("should navigate to blog page", () => {
      cy.get("[data-testid=blog-link]").click();
      cy.url().should("include", "/blog");
    });
  
    it("should navigate to contact page", () => {
      cy.get("[data-testid=contact-link]").click();
      cy.url().should("include", "/contact");
    });
  });
  