import PageObject from "../support/PageObject";

class LoginPageObject extends PageObject {
  logUser() {
    cy.get("#loginFrm_loginname").type("KarolNowak");
    cy.get("#loginFrm_password").type("Qwerty123");
    cy.get('button.btn.btn-orange.pull-right[title="Login"]').click();
  }
}
export default LoginPageObject;
