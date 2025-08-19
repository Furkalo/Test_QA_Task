describe("Checkout with empty cart", () => {
  it("should show error when cart is empty", async () => {
    await browser.url("https://www.saucedemo.com/");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    await expect(await browser.getUrl()).toContain("inventory.html");

    await $('[data-test="shopping-cart-link"]').click();
    await expect(await browser.getUrl()).toContain("cart.html");

    const items = await $$(".cart_item");
    await expect(items.length).toBe(0);

    await $('[data-test="checkout"]').click();

    const errorMsg = await $(".error-message-container");

    const text = await errorMsg.getText();
    expect(text).toContain("Cart is empty");
  });
});
