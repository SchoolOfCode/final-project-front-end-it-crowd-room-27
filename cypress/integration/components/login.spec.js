describe("when user visits landing page", () => {
   context("Landing Page", () => {
      beforeEach(() => {
         cy.visit("http://localhost:3000");
      });

      it("should render the landing page and display a message", () => {
         cy.get("[data-cy= landing-page]").contains("iGive with pleasure");
      });
   });
});

describe("login", () => {
   it("should successfully log into our app", () => {
      cy.login()
         .then((resp) => {
            return resp.body;
         })
         .then((body) => {
            const { access_token, expires_in, id_token } = body;
            const auth0State = {
               nonce: "",
               state: "some-random-state",
            };
            const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
            cy.visit(callbackUrl, {
               onBeforeLoad(win) {
                  win.document.cookie =
                     "com.auth0.auth.some-random-state=" +
                     JSON.stringify(auth0State);
               },
            });
         });
   });
});
