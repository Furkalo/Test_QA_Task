import LoginPage from "../pageobjects/login.page.js";

describe("Login test", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("inventory.html");
  });
});
