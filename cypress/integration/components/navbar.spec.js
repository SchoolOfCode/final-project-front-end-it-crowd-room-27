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

      it("should render the listings page once clicking on Home on navbar", () => {
         cy.get("#__next").find("li").first().should("have.text", "Home");
      });

      it("should render the About page once clicking on About on navbar", () => {
         cy.get("#navbar_menuItem__EyQsE")
            .find("li")
            .next()
            .should("have.text", "About");
      });

      //  it("should find a link with an href attribute containing About", () => {
      //    cy.get('a[href="About"]').click();
      // });
      // "navbar_menu__GrkEK"
      // it("check all links on navbar", () => {
      //    cy.visit("/");
      //    cy.get("li").each((page) => {
      //       cy.request(page.prop("href"));
      //    });
      // });
      //

      // it("should render the blog once clicking on navbar", () => {
      //    cy.get("#__next").find("li").should("have.text", "Blog");
      // });
   });
});
