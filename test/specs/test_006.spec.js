describe("Product sorting", () => {
  it("should sort products correctly by all options", async () => {
    await browser.url("https://www.saucedemo.com/");
    const usernameInput = await $("#user-name");
    await usernameInput.setValue("standard_user");
    const passwordInput = await $("#password");
    await passwordInput.setValue("secret_sauce");
    const loginButton = await $("#login-button");
    await loginButton.click();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("inventory.html");

    const sortDropdown = await $('[data-test="product-sort-container"]');

    await sortDropdown.selectByAttribute("value", "az");
    const itemNamesAZ = await $$(".inventory_item_name");
    const namesAZ = [];
    for (const el of itemNamesAZ) {
      namesAZ.push(await el.getText());
    }
    const sortedAZ = [...namesAZ].sort();
    expect(namesAZ).toEqual(sortedAZ);

    await sortDropdown.selectByAttribute("value", "za");
    const itemNamesZA = await $$(".inventory_item_name");
    const namesZA = [];
    for (const el of itemNamesZA) {
      namesZA.push(await el.getText());
    }
    const sortedZA = [...namesZA].sort().reverse();
    expect(namesZA).toEqual(sortedZA);

    await sortDropdown.selectByAttribute("value", "lohi");
    const itemPricesLow = await $$(".inventory_item_price");
    const pricesLow = [];
    for (const el of itemPricesLow) {
      const text = await el.getText();
      pricesLow.push(parseFloat(text.replace("$", "")));
    }
    const sortedLow = [...pricesLow].sort((a, b) => a - b);
    expect(pricesLow).toEqual(sortedLow);

    await sortDropdown.selectByAttribute("value", "hilo");
    const itemPricesHigh = await $$(".inventory_item_price");
    const pricesHigh = [];
    for (const el of itemPricesHigh) {
      const text = await el.getText();
      pricesHigh.push(parseFloat(text.replace("$", "")));
    }
    const sortedHigh = [...pricesHigh].sort((a, b) => b - a);
    expect(pricesHigh).toEqual(sortedHigh);
  });
});
