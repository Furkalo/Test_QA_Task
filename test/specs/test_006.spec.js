describe("Product sorting", () => {
  it("should sort products correctly by all options", async () => {
    await browser.url("https://www.saucedemo.com/");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("inventory.html");

    const sortDropdown = await $('[data-test="product-sort-container"]');

    await sortDropdown.selectByAttribute("value", "az");
    const itemElementsAZ = await $$(".inventory_item_name");
    const namesAZ = [];
    for (const el of itemElementsAZ) {
      namesAZ.push(await el.getText());
    }
    expect(namesAZ).toEqual([...namesAZ].sort());

    await sortDropdown.selectByAttribute("value", "za");
    const itemElementsZA = await $$(".inventory_item_name");
    const namesZA = [];
    for (const el of itemElementsZA) {
      namesZA.push(await el.getText());
    }
    expect(namesZA).toEqual([...namesZA].sort().reverse());

    await sortDropdown.selectByAttribute("value", "lohi");
    const priceElementsLow = await $$(".inventory_item_price");
    const pricesLow = [];
    for (const el of priceElementsLow) {
      const text = await el.getText();
      pricesLow.push(parseFloat(text.replace("$", "")));
    }
    expect(pricesLow).toEqual([...pricesLow].sort((a, b) => a - b));

    await sortDropdown.selectByAttribute("value", "hilo");
    const priceElementsHigh = await $$(".inventory_item_price");
    const pricesHigh = [];
    for (const el of priceElementsHigh) {
      const text = await el.getText();
      pricesHigh.push(parseFloat(text.replace("$", "")));
    }
    expect(pricesHigh).toEqual([...pricesHigh].sort((a, b) => b - a));
  });
});
