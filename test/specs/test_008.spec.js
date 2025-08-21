import loginPage from "../pageobjects/login.page.js";
import inventoryPage from "../pageobjects/Inventory.page.js";
import cartPage from "../pageobjects/Cart.page.js";
import checkoutPage from "../pageobjects/Checkout.page.js";
import checkoutCompletePage from "../pageobjects/CheckoutComplete.page.js";

describe("Checkout Flow", () => {
  it("should complete checkout successfully", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(await browser.getUrl()).toContain("inventory.html");

    await inventoryPage.addBackpackToCart();
    await expect(await $(".shopping_cart_badge")).toHaveText("1");

    await cartPage.openCart();
    await expect(await browser.getUrl()).toContain("cart.html");

    await cartPage.checkout();
    await expect(await browser.getUrl()).toContain("checkout-step-one.html");

    await checkoutPage.fillCheckoutForm("John", "Doe", "12345");
    await checkoutPage.continue();
    await expect(await browser.getUrl()).toContain("checkout-step-two.html");

    await checkoutPage.finish();
    await expect(await browser.getUrl()).toContain("checkout-complete.html");

    await checkoutCompletePage.backToProducts();
    await expect(await browser.getUrl()).toContain("inventory.html");
  });
});
