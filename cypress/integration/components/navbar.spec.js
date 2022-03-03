describe("user clicks on login button on navbar- auth0", () => {
   it("should render the auth0 page", () => {
      cy.request("http://localhost:3000");
      cy.get("[data-cy=login]").contains("Log In").click();
   });
});
//can use these values to login
const username = "jane.lane";
const password = "password123";

context("cy.request", () => {
   it("user should fill username and password correctly", () => {
      cy.request({
         url: "http://localhost:3000/listings",
         auth: {
            username,
            password,
         },
      })
         .its("status")
         .should("equal", 200);
   });
});
