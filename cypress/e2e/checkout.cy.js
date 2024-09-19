import CartPageObject from "../support/cart.PageObject";
import ConfirmPageObject from "../support/confirm.PageObject";
import HomePageObject from "../support/home.PageObject";
import LoginPageObject from "../support/login.PageObject";
import ProductPageObject from "../support/product.PageObject";
import SuccessPageObject from "../support/success.PageObject";

const cartPage = new CartPageObject();
const confirmPage = new ConfirmPageObject();
const homePage = new HomePageObject();
const loginPage = new LoginPageObject();
const productPage = new ProductPageObject();
const successPage = new SuccessPageObject();

describe("Buying stuff from automationtest website", () => {
  before(() => {
    cy.visit("https://automationteststore.com/");
  });
  it("Should buy an item on AutomationTest website", () => {
    homePage.clickAddToCart();
    homePage.clickOnCheckout();
    loginPage.logUser();
    confirmPage.clickOrderConfirm();
    cy.contains(" Your Order Has Been Processed!").should("be.visible");
  });
});
