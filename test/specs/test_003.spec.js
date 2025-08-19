describe("Login test with invalid login", () => {
  it("should show error on invalid login", async () => {
    await browser.url("https://www.saucedemo.com/");

    const usernameInput = await $("#user-name");
    await usernameInput.setValue("standarD_user");

    const passwordInput = await $("#password");
    await passwordInput.setValue("secret_sauce");

    const loginButton = await $("#login-button");
    await loginButton.click();

    const errorMsg = await $('[data-test="error"]');
    await expect(await errorMsg.isDisplayed()).toBe(true);
    await expect(await errorMsg.getText()).toContain(
      "Username and password do not match"
    );
  });
});
