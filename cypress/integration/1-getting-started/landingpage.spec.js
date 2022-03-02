context("Landing Page", () => {
   beforeEach(() => {
      cy.visit("http://localhost:3000");
   });

   it("should render the landing page and display a message", () => {
      cy.get("h1").contains("iGive");
   });
});
