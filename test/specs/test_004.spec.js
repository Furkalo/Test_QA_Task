import loginPage from "../pageobjects/login.page.js";
import inventoryPage from "../pageobjects/Inventory.page.js";

describe("Logout test via Burger Menu", () => {
  it("should logout successfully and redirect to Login page", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    const currentUrl = await inventoryPage.getCurrentUrl();
    expect(currentUrl).toContain("inventory.html");

    await inventoryPage.openMenu();
    await inventoryPage.logout();

    const loginUrl = await inventoryPage.getCurrentUrl();
    expect(loginUrl).toContain("saucedemo.com");

    expect(await loginPage.getUsernameValue()).toBe("");
    expect(await loginPage.getPasswordValue()).toBe("");
  });
});
