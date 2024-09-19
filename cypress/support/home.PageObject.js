import PageObject from "../support/PageObject";

class HomePageObject extends PageObject {
  clickAddToCart() {
    cy.get('a[data-id="52"] i.fa-cart-plus').click();
  }
  clickOnCheckout() {
    cy.contains(".menu_text", "Checkout").click({ force: true });
  }
}
export default HomePageObject;
