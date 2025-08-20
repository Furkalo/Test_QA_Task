import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/Inventory.page.js";

describe("Footer Links", () => {
  it("should open social links in new tabs", async () => {
    // 1. Логін
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(await browser.getUrl()).toContain("inventory.html");

    // Соцмережі: перевірка URL після кліку
    const twitterUrl = await InventoryPage.clickSocialLink(
      InventoryPage.twitterLink
    );
    expect(twitterUrl).toMatch(/(twitter|x)\.com\/saucelabs/);

    const facebookUrl = await InventoryPage.clickSocialLink(
      InventoryPage.facebookLink
    );
    expect(facebookUrl).toContain("facebook.com/saucelabs");

    const linkedinUrl = await InventoryPage.clickSocialLink(
      InventoryPage.linkedinLink
    );
    expect(linkedinUrl).toContain("linkedin.com/company/sauce-labs");
  });
});
