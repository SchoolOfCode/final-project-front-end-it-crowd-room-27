describe("user visits landing page", () => {
   context("Landing Page", () => {
      beforeEach(() => {
         cy.visit("http://localhost:3000");
      });

      it("should render the landing page and get the text of the heading", () => {
         cy.get("body").contains("iGive with pleasure");
      });

      it("user should click on login button on navbar", () => {
         cy.get("#__next").find("li").last().should("have.text", "Log In");
      });

      it("user should ", () => {});
   });
});
