import PageObject from "../support/PageObject";
class ConfirmPageObject extends PageObject {
  clickOrderConfirm() {
    cy.get("#checkout_btn").click();
  }
}
export default ConfirmPageObject;
