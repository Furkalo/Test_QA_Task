import loginPage from "../pageobjects/login.page.js";
import inventoryPage from "../pageobjects/Inventory.page.js";

describe("Footer Links", () => {
  it("should open social links in new tabs", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(await browser.getUrl()).toContain("inventory.html");

    const twitterUrl = await inventoryPage.clickSocialLink(
      inventoryPage.twitterLink
    );
    expect(twitterUrl).toMatch(/(twitter|x)\.com\/saucelabs/);

    const facebookUrl = await inventoryPage.clickSocialLink(
      inventoryPage.facebookLink
    );
    expect(facebookUrl).toContain("facebook.com/saucelabs");

    const linkedinUrl = await inventoryPage.clickSocialLink(
      inventoryPage.linkedinLink
    );
    expect(linkedinUrl).toContain("linkedin.com/company/sauce-labs");
  });
});
