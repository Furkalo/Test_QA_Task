import loginPage from "../pageobjects/login.page.js";
import cartPage from "../pageobjects/Cart.page.js";

describe("Checkout with empty cart", () => {
  it("should show error when cart is empty", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(await browser.getUrl()).toContain("inventory.html");

    await cartPage.openCart();
    await expect(await browser.getUrl()).toContain("cart.html");

    const itemsCount = await cartPage.getItemsCount();
    expect(itemsCount).toBe(0);

    await cartPage.checkout();

    const text = await cartPage.getErrorText();
    expect(text).toContain("Cart is empty");
  });
});
