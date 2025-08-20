import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/Inventory.page.js";
import CartPage from "../pageobjects/Cart.page.js";

describe("Cart persistence after logout/login", () => {
  it("should retain items in cart after logout/login", async () => {
    // логін
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");

    let currentUrl = await InventoryPage.getCurrentUrl();
    expect(currentUrl).toContain("inventory.html");

    // додаємо товар у корзину
    await InventoryPage.addBackpackToCart();

    // вихід
    await InventoryPage.openMenu();
    await InventoryPage.logout();

    currentUrl = await InventoryPage.getCurrentUrl();
    expect(currentUrl).toContain("saucedemo.com");

    // перевірка очищення інпутів
    expect(await LoginPage.getUsernameValue()).toBe("");
    expect(await LoginPage.getPasswordValue()).toBe("");

    // знову логін
    await LoginPage.login("standard_user", "secret_sauce");

    currentUrl = await InventoryPage.getCurrentUrl();
    expect(currentUrl).toContain("inventory.html");

    // відкриваємо корзину
    await CartPage.openCart();
    currentUrl = await CartPage.getCurrentUrl();
    expect(currentUrl).toContain("cart.html");

    // перевірка наявності товару
    const itemsCount = await CartPage.getItemsCount();
    expect(itemsCount).toBeGreaterThan(0);
  });
});
