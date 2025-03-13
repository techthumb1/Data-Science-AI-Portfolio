/// <reference types="cypress" />

describe("Blog Page", () => {
    beforeEach(() => {
      cy.visit("/blog");
    });
  
    it("should display blog posts", () => {
      cy.get("[data-testid=blog-list]").should("exist");
    });
  
    it("should navigate to a blog post", () => {
      cy.get("[data-testid=blog-card]").first().click();
      cy.url().should("include", "/blog/");
    });
  });
  