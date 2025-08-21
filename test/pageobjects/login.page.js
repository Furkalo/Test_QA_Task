class LoginPage {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnLogin() {
    return $("#login-button");
  }

  get errorMsg() {
    return $(".error-message-container");
  }

  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async clickLogin() {
    await this.btnLogin.click();
  }

  async getErrorText() {
    return await this.errorMsg.getText();
  }
}

// Експортуємо вже готовий екземпляр
export default new LoginPage();
