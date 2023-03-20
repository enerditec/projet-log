describe("register form", () => {
  after(() => {
    cy.gotoAdminPanel("admin@example.com", "password");
    cy.visit("http://localhost:4000/admin/resources/users?filters.email=test.com&page=1")
    cy.get(".eNfLoz").first().click();
    cy.findByTestId("action-bulkDelete").click();
    cy.get(".adminjs_Button").last().click();
  });

  it("should redirect to login", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });

  it("should have a register link", () => {
    cy.visit("/");
    cy.findByRole("link", { name: /Pas encore de compte ?/i }).should("exist");
  });

  it("should redirect to register page", () => {
    cy.visit("/");
    cy.findByRole("link", { name: /Pas encore de compte ?/i }).click();
    cy.url().should("include", "/signup");
  });

  it("should have a register form with 15 inputs", () => {
    cy.visit("/signup");
    cy.get("form").should("exist").children().should("have.length", 15);
  });

  it("should redirect to login page after register", () => {
    cy.visit("/signup");
    cy.findByTestId("lastname").clear().type("lastname");
    cy.findByTestId("firstname").clear().type("firstname");
    cy.findByTestId("username").clear().type("username");
    cy.findByTestId("email").clear().type("email@test.com");
    cy.findByTestId("password").clear().type("password");
    cy.findByTestId("birthdate").clear().type("1990-01-01");
    cy.findByTestId("role").clear().type("test");
    cy.findByTestId("address").clear().type("12 rue de la paix");
    cy.findByTestId("city").clear().type("Paris");
    cy.findByTestId("country").clear().type("75000");
    cy.findByTestId("telnumber").clear().type("0606060606");
    cy.findByTestId("company").clear().type("company");
    cy.findByTestId("siret").clear().type("123456789");
    cy.findByTestId("S'enregistrer").click();
    cy.url().should("include", "/login");
  });

  it("should display an error message if the username or email is already used", () => {
    cy.visit("/signup");
    cy.findByTestId("lastname").clear().type("lastname");
    cy.findByTestId("firstname").clear().type("firstname");
    cy.findByTestId("username").clear().type("username");
    cy.findByTestId("email").clear().type("email@test.com");
    cy.findByTestId("password").clear().type("password");
    cy.findByTestId("birthdate").clear().type("1990-01-01");
    cy.findByTestId("role").clear().type("test");
    cy.findByTestId("address").clear().type("12 rue de la paix");
    cy.findByTestId("city").clear().type("Paris");
    cy.findByTestId("country").clear().type("75000");
    cy.findByTestId("telnumber").clear().type("0606060606");
    cy.findByTestId("company").clear().type("company");
    cy.findByTestId("siret").clear().type("123456789");
    cy.findByTestId("S'enregistrer").click();
    cy.findByText(/Nom d'utilisateur déjà existant/i).should("exist");
    cy.findByTestId("username").clear().type("username2");
    cy.findByTestId("S'enregistrer").click();
    cy.findByText(/Email déjà existant/i).should("exist");
    cy.findByTestId("email").clear().type("email2@test.com");
    cy.findByTestId("S'enregistrer").click();
    cy.url().should("include", "/login");
  });
});
