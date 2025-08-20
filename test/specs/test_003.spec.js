import LoginPage from "../pageobjects/login.page.js";

describe("Login test with invalid login", () => {
  it("should show error on invalid login", async () => {
    await LoginPage.open();
    await LoginPage.login("standarD_user", "secret_sauce");

    await expect(LoginPage.errorMsg).toBeDisplayed();
    const errorText = await LoginPage.getErrorText();
    expect(errorText).toContain("Username and password do not match");
  });
});
