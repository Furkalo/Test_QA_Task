import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/Inventory.page.js";

describe("Logout test via Burger Menu", () => {
  it("should logout successfully and redirect to Login page", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");

    const currentUrl = await InventoryPage.getCurrentUrl();
    expect(currentUrl).toContain("inventory.html");

    await InventoryPage.openMenu();
    await InventoryPage.logout();

    const loginUrl = await InventoryPage.getCurrentUrl();
    expect(loginUrl).toContain("saucedemo.com");

    expect(await LoginPage.getUsernameValue()).toBe("");
    expect(await LoginPage.getPasswordValue()).toBe("");
  });
});
