import Page from "./page.js";

class CheckoutPage extends Page {
  get firstNameInput() {
    return $("#first-name");
  }
  get lastNameInput() {
    return $("#last-name");
  }
  get postalCodeInput() {
    return $("#postal-code");
  }
  get continueBtn() {
    return $('[data-test="continue"]');
  }
  get finishBtn() {
    return $('[data-test="finish"]');
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
  }

  async continue() {
    await this.continueBtn.click();
  }

  async finish() {
    await this.finishBtn.click();
  }
}

export default new CheckoutPage();
