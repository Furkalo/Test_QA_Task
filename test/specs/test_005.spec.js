import loginPage from "../pageobjects/login.page.js";
import inventoryPage from "../pageobjects/Inventory.page.js";
import cartPage from "../pageobjects/Cart.page.js";

describe("Cart persistence after logout/login", () => {
  it("should retain items in cart after logout/login", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    let currentUrl = await inventoryPage.getCurrentUrl();
    expect(currentUrl).toContain("inventory.html");

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openMenu();
    await inventoryPage.logout();

    currentUrl = await inventoryPage.getCurrentUrl();
    expect(currentUrl).toContain("saucedemo.com");

    expect(await loginPage.getUsernameValue()).toBe("");
    expect(await loginPage.getPasswordValue()).toBe("");

    await loginPage.login("standard_user", "secret_sauce");

    currentUrl = await inventoryPage.getCurrentUrl();
    expect(currentUrl).toContain("inventory.html");

    await cartPage.openCart();
    currentUrl = await cartPage.getCurrentUrl();
    expect(currentUrl).toContain("cart.html");

    const itemsCount = await cartPage.getItemsCount();
    expect(itemsCount).toBeGreaterThan(0);
  });
});
