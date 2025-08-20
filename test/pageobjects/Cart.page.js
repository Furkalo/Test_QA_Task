class CartPage {
  get cartButton() {
    return $("#shopping_cart_container a");
  }
  get cartItems() {
    return $$(".cart_item");
  }
  get checkoutBtn() {
    return $('[data-test="checkout"]');
  }
  get errorMsg() {
    return $(".error-message-container");
  }

  async openCart() {
    await this.cartButton.click();
  }
  async checkout() {
    await this.checkoutBtn.click();
  }
  async getItemsCount() {
    return (await this.cartItems).length;
  }

  async getCurrentUrl() {
    return await browser.getUrl();
  }
  async getErrorText() {
    if (await this.errorMsg.isDisplayed()) {
      return await this.errorMsg.getText();
    }
    return "";
  }
}

module.exports = new CartPage();
