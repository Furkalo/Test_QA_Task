describe("Checkout Flow", () => {
  it("should complete checkout successfully", async () => {
    await browser.url("https://www.saucedemo.com/");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    await expect(await browser.getUrl()).toContain("inventory.html");

    const addToCartBtn = await $(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    await addToCartBtn.click();

    const cartBadge = await $(".shopping_cart_badge");
    await expect(cartBadge).toHaveText("1");

    await $('[data-test="shopping-cart-link"]').click();
    await expect(await browser.getUrl()).toContain("cart.html");

    await $('[data-test="checkout"]').click();
    await expect(await browser.getUrl()).toContain("checkout-step-one.html");

    await $("#first-name").setValue("John");
    await $("#last-name").setValue("Doe");
    await $("#postal-code").setValue("12345");

    await $('[data-test="continue"]').click();
    await expect(await browser.getUrl()).toContain("checkout-step-two.html");

    await $('[data-test="finish"]').click();
    await expect(await browser.getUrl()).toContain("checkout-complete.html");

    await $('[data-test="back-to-products"]').click();
    await expect(await browser.getUrl()).toContain("inventory.html");
  });
});
