import loginPage from "../pageobjects/login.page.js";

describe("Login test with invalid login", () => {
  it("should show error on invalid login", async () => {
    await loginPage.open();
    await loginPage.login("standarD_user", "secret_sauce");

    await expect(loginPage.errorMsg).toBeDisplayed();
    const errorText = await loginPage.getErrorText();
    expect(errorText).toContain("Username and password do not match");
  });
});
