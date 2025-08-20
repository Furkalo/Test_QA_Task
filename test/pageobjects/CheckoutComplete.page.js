import Page from "./page.js";

class CheckoutCompletePage extends Page {
  get backToProductsBtn() {
    return $('[data-test="back-to-products"]');
  }

  async backToProducts() {
    await this.backToProductsBtn.click();
  }
}

export default new CheckoutCompletePage();
