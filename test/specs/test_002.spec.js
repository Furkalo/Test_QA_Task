import LoginPage from "../pageobjects/login.page.js";

describe("Login test", () => {
  it("should show error on invalid password", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "wrong_password123");

    await expect(LoginPage.errorMsg).toBeDisplayed();
    const errorText = await LoginPage.getErrorText();
    expect(errorText).toContain("Username and password do not match");
  });
});
