describe("when user visits landing page", () => {
   context("Landing Page", () => {
      beforeEach(() => {
         cy.visit("http://localhost:3000/");
      });

      it("should render the landing page and display a message in the heading", () => {
         cy.get("body").contains("food waste");
      });
      it("user should click on login button on navbar", () => {
         cy.get("#__next").find("li").last().should("have.text", "Log In");
      });

      it("check all links on page", () => {
         cy.get("a").each((page) => {
            cy.request(page.prop("href"));
         });

         it("give item button should open up give away modal from navbar", () => {
            cy.get(".navbar_btn__aeUzp").should("be.visible").click();
         });

         describe("contact form", () => {
            cy.visit("/");
            it("user should enter correct email address", () => {
               cy.get(".form-control").type("info@domain.com");
               cy.get(".home_button__5p6hV")
                  .click()
                  .then({ timeout: 2000 }, () => {
                     cy.get(".form-success").should("have.length", 1);
                  });
            });
         });
      });
   });
});
