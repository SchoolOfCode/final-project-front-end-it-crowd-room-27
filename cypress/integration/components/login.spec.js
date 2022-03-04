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

      //it("should be redirected to loginViaAuth0", () => {
   });
});

// describe("user clicks on login button on navbar", () => {
//    it("should successfully log into our app", () => {
//       cy.login()
//          .then((resp) => {
//             return resp.body;
//          })
//          .then((body) => {
//             const { access_token, expires_in, id_token } = body;
//             const auth0State = {
//                nonce: "",
//                state: "some-random-state",
//             };
//             const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
//             cy.visit(callbackUrl, {
//                onBeforeLoad(win) {
//                   win.document.cookie =
//                      "com.auth0.auth.some-random-state=" +
//                      JSON.stringify(auth0State);
//                },
//             });
//          });
//    });
// });
