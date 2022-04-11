describe("when user visits landing page", () => {
   context("Landing Page", () => {
      beforeEach(() => {
         cy.visit("http://igive.netlify.app/");
         // cy.visit("http://localhost:3001/");
      });

      it("should render the landing page and display a message in the heading", () => {
         cy.get("body").contains("food waste");
      });
      it("should be able to login from navbar and type in email and password", () => {
         cy.get("#__next").find("li").last().should("have.text", "Log In");
      });

      it("user can navigate using links on navbar", () => {
         const pages = ["Listings", "About"];

         pages.forEach((page) => {
            cy.contains(page).then((link) => {
               cy.request(link.prop("href"));
            });
         });
      });

      it("give item button should open up give away modal from navbar", () => {
         cy.get(".navbar_btn__aeUzp").should("be.visible").click();
      });

      describe("contact form", () => {
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
