describe("login", () => {
  before(() => {
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
  });

  after(() => {
    cy.gotoAdminPanel("admin@example.com", "password");
    cy.visit(
      "http://localhost:4000/admin/resources/users?filters.email=test.com&page=1"
    );
    cy.get(".eNfLoz").first().click();
    cy.findByTestId("action-bulkDelete").click();
    cy.get(".adminjs_Button").last().click();
  });
  it("should redirect to login", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });
  it("should have a login form", () => {
    cy.visit("/login");
    cy.get("form").should("exist").children().should("have.length", 3);
  });

  it("should display an error if the user doesn't exist", () => {
    cy.visit("/login");
    cy.findByTestId("email").clear().type("notexist@test.com");
    cy.findByTestId("password").clear().type("password");
    cy.findByTestId("Se connecter").click();
    cy.findByText(/Utilisateur non trouvé/i).should("exist");
  });

  it("should display an error if user is not confirmed", () => {
    cy.visit("/login");
    cy.findByTestId("email").clear().type("email@test.com");
    cy.findByTestId("password").clear().type("password");
    cy.findByTestId("Se connecter").click();
    cy.findByText(
      /Votre compte n'est pas encore était confirmé par un administrateur/i
    ).should("exist");
  });

  it("should confirm the user", () => {
    cy.gotoAdminPanel("admin@example.com", "password");
    cy.findByText("Filter").click();
    cy.get(".adminjs_Input").first().type("email@test.com");
    cy.findByRole("button", { name: /apply changes/i }).click();
    cy.findByTestId("actions-dropdown").trigger("mouseover");
    cy.findByTestId("action-Confirmer").click();
    cy.findByTestId("property-list-isConfirmed").contains("Yes");
  });

  it("should display an error if the password is incorrect", () => {
    cy.visit("/login");
    cy.findByTestId("email").clear().type("email@test.com");
    cy.findByTestId("password").clear().type("incorrect");
    cy.findByTestId("Se connecter").click();
    cy.findByText(/Invalid Password!/i).should("exist");
  });

  it("should redirect to home if the user is connected", () => {
    cy.visit("/login");
    cy.findByTestId("email").clear().type("email@test.com");
    cy.findByTestId("password").clear().type("password");
    cy.findByTestId("Se connecter").click();
    cy.url().should("include", "/");
  });

  it("should redirect to login if the user is disconnected", () => {
    cy.visit("/login");
    cy.findByTestId("email").clear().type("email@test.com");
    cy.findByTestId("password").clear().type("password");
    cy.findByTestId("Se connecter").click();
    cy.findByText(/Logout/i).click();
    cy.url().should("include", "/login");
  });
});