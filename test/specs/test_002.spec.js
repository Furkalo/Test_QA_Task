describe("Login test", () => {
  it("should show error on invalid password", async () => {
    await browser.url("https://www.saucedemo.com/");

    const usernameInput = await $("#user-name");
    await usernameInput.setValue("standard_user");

    const passwordInput = await $("#password");
    await passwordInput.setValue("wrong_password123");

    const loginButton = await $("#login-button");
    await loginButton.click();

    const errorMsg = await $('[data-test="error"]');
    await expect(errorMsg).toBeDisplayed();
    await expect(await errorMsg.getText()).toContain(
      "Username and password do not match"
    );
  });
});
