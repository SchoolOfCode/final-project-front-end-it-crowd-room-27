describe("when user visits landing page", () => {
   context("Landing Page", () => {
      beforeEach(() => {
         cy.visit("http://localhost:3000");
      });

      it("should render the landing page and display a message in the heading", () => {
         cy.get("body").contains("food waste");
      });
      it("user should click on login button on navbar", () => {
         cy.get("#__next").find("li").last().should("have.text", "Log In");
      });

      it("use requests to navigation bar links", () => {
         const pages = ["Listings", "About"];

         cy.visit("/");

         pages.forEach((page) => {
            cy.contains(page).then((link) => {
               cy.request(link.prop("href"));
            });
         });
      });

      it("give item button should open up give away modal from navbar", () => {
         cy.get(".navbar_btn__aeUzp").should("be.visible").click();
      });
   });
});
