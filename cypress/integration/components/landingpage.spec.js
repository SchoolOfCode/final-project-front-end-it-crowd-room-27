describe("when user visits landing page", () => {
   context("Landing Page", () => {
      beforeEach(() => {
         cy.visit("http://localhost:3000");
      });

      it("should render the landing page and display a message", () => {
         cy.get("cy.get('body')").contains("iGive with pleasure");
      });
   });
});
