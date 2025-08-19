describe("Cart persistence after logout/login", () => {
  it("should retain items in cart after logout/login", async () => {
    await browser.url("https://www.saucedemo.com/");
    const usernameInput = await $("#user-name");
    await usernameInput.setValue("standard_user");
    const passwordInput = await $("#password");
    await passwordInput.setValue("secret_sauce");
    const loginButton = await $("#login-button");
    await loginButton.click();

    let currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("inventory.html");

    const addToCartButton = await $("#add-to-cart-sauce-labs-backpack");
    await addToCartButton.click();

    const burgerButton = await $("#react-burger-menu-btn");
    await burgerButton.click();

    const logoutButton = await $("#logout_sidebar_link");
    await logoutButton.click();

    currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("saucedemo.com");

    const usernameValue = await $("#user-name").getValue();
    const passwordValue = await $("#password").getValue();
    expect(usernameValue).toBe("");
    expect(passwordValue).toBe("");

    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");
    await loginButton.click();

    currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("inventory.html");

    const cartButton = await $("#shopping_cart_container a");
    await cartButton.click();

    currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("cart.html");

    const cartItems = await $$(".cart_item");
    expect(cartItems.length).toBeGreaterThan(0);
  });
});
