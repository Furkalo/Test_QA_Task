describe("Login test", () => {
  it("should login with valid credentials", async () => {
    await browser.url("https://www.saucedemo.com/");

    const usernameInput = await $("#user-name");
    await usernameInput.setValue("standard_user");

    const passwordInput = await $("#password");
    await passwordInput.setValue("secret_sauce");

    const loginButton = await $("#login-button");
    await loginButton.click();

    await expect(await browser.getUrl()).toContain("inventory.html");
  });
});
