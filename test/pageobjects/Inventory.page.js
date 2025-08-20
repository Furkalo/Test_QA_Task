import Page from "./page.js";

class InventoryPage extends Page {
  get sortDropdown() {
    return $('[data-test="product-sort-container"]');
  }
  get cartIcon() {
    return $(".shopping_cart_link");
  }
  get cartBadge() {
    return $(".shopping_cart_badge");
  }

  get twitterLink() {
    return $('[data-test="social-twitter"]');
  }
  get facebookLink() {
    return $('[data-test="social-facebook"]');
  }
  get linkedinLink() {
    return $('[data-test="social-linkedin"]');
  }

  async selectSort(option) {
    await this.sortDropdown.selectByAttribute("value", option);
    const items = await $$(".inventory_item_name");
    if (items.length) await items[0].waitForDisplayed({ timeout: 2000 });
  }

  async addBackpackToCart() {
    const btn = await $("#add-to-cart-sauce-labs-backpack");
    await btn.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async openMenu() {
    const menuBtn = await $("#react-burger-menu-btn");
    await menuBtn.click();
  }

  async logout() {
    const logoutBtn = await $("#logout_sidebar_link");
    await logoutBtn.click();
  }

  async getItemNames() {
    const elements = await $$(".inventory_item_name");
    const arrayElements = Array.isArray(elements)
      ? elements
      : Array.from(elements);
    return await Promise.all(
      arrayElements.map(async (el) => await el.getText())
    );
  }

  async getItemPrices() {
    const elements = await $$(".inventory_item_price");
    const arrayElements = Array.isArray(elements)
      ? elements
      : Array.from(elements);
    const texts = await Promise.all(
      arrayElements.map(async (el) => await el.getText())
    );
    return texts.map((t) => parseFloat(t.replace("$", "")));
  }

  async clickSocialLink(linkElement) {
    await linkElement.click();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    const url = await browser.getUrl();
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    return url;
  }

  open() {
    return super.open("inventory.html");
  }
}

export default new InventoryPage();
