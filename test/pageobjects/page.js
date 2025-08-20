export default class Page {
  open(path) {
    return browser.url(`/${path}`);
  }

  async getCurrentUrl() {
    return browser.getUrl();
  }
}
