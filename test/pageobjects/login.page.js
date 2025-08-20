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
    return $('[data-test="error"]');
  }

  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  async getUsernameValue() {
    return await this.inputUsername.getValue();
  }

  async getPasswordValue() {
    return await this.inputPassword.getValue();
  }

  async getErrorText() {
    return await this.errorMsg.getText();
  }
}

export default new LoginPage();
