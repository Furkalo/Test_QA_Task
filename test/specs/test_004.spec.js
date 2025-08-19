describe("Logout test via Burger Menu", () => {
  it("should logout successfully and redirect to Login page", async () => {
    await browser.url("https://www.saucedemo.com/");
    const usernameInput = await $("#user-name");
    await usernameInput.setValue("standard_user");
    const passwordInput = await $("#password");
    await passwordInput.setValue("secret_sauce");
    const loginButton = await $("#login-button");
    await loginButton.click();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("inventory.html");

    const burgerButton = await $("#react-burger-menu-btn");
    await burgerButton.click();

    const logoutButton = await $("#logout_sidebar_link");
    await logoutButton.click();

    const loginUrl = await browser.getUrl();
    expect(loginUrl).toContain("saucedemo.com");

    const usernameValue = await $("#user-name").getValue();
    const passwordValue = await $("#password").getValue();
    expect(usernameValue).toBe("");
    expect(passwordValue).toBe("");
  });
});
