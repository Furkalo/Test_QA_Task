import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/Cart.page.js";

describe("Checkout with empty cart", () => {
  it("should show error when cart is empty", async () => {
    // Логін
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(await browser.getUrl()).toContain("inventory.html");

    // Відкрити корзину
    await CartPage.openCart();
    await expect(await browser.getUrl()).toContain("cart.html");

    // Перевірка, що корзина порожня
    const itemsCount = await CartPage.getItemsCount();
    expect(itemsCount).toBe(0);

    // Натискаємо Checkout
    await CartPage.checkout();

    // Перевірка помилки
    const text = await CartPage.getErrorText();
    expect(text).toContain("Cart is empty");
  });
});
