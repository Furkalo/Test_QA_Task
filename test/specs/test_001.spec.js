import loginPage from "../pageobjects/login.page.js";

describe("Login test", () => {
  it("should login with valid credentials", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("inventory.html");
  });
});
