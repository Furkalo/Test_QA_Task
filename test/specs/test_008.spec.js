import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/Inventory.page.js";
import CartPage from "../pageobjects/Cart.page.js";
import CheckoutPage from "../pageobjects/Checkout.page.js";
import CheckoutCompletePage from "../pageobjects/CheckoutComplete.page.js";

describe("Checkout Flow", () => {
  it("should complete checkout successfully", async () => {
    // Логін
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(await browser.getUrl()).toContain("inventory.html");

    // Додати товар у корзину
    await InventoryPage.addBackpackToCart();
    await expect(await $(".shopping_cart_badge")).toHaveText("1");

    // Відкрити корзину
    await CartPage.openCart();
    await expect(await browser.getUrl()).toContain("cart.html");

    // Checkout
    await CartPage.checkout();
    await expect(await browser.getUrl()).toContain("checkout-step-one.html");

    // Заповнити форму
    await CheckoutPage.fillCheckoutForm("John", "Doe", "12345");
    await CheckoutPage.continue();
    await expect(await browser.getUrl()).toContain("checkout-step-two.html");

    // Завершити checkout
    await CheckoutPage.finish();
    await expect(await browser.getUrl()).toContain("checkout-complete.html");

    // Повернутись на продукти
    await CheckoutCompletePage.backToProducts();
    await expect(await browser.getUrl()).toContain("inventory.html");
  });
});
