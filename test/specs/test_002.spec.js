import loginPage from "../pageobjects/login.page.js";

describe("Login test", () => {
  it("should show error on invalid password", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "wrong_password123");

    await expect(loginPage.errorMsg).toBeDisplayed();
    const errorText = await loginPage.getErrorText();
    expect(errorText).toContain("Username and password do not match");
  });
});
