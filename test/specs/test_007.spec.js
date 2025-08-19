describe("Footer Links", () => {
  it("should open social links in new tabs", async () => {
    // 1. Login
    await browser.url("https://www.saucedemo.com/");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    await expect(await browser.getUrl()).toContain("inventory.html");

    const twitterLink = await $('[data-test="social-twitter"]');
    await twitterLink.click();
    let handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    let twitterUrl = await browser.getUrl();
    expect(twitterUrl).toMatch(/(twitter|x)\.com\/saucelabs/);
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);

    const facebookLink = await $('[data-test="social-facebook"]');
    await facebookLink.click();
    handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    let facebookUrl = await browser.getUrl();
    expect(facebookUrl).toContain("facebook.com/saucelabs");
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);

    const linkedinLink = await $('[data-test="social-linkedin"]');
    await linkedinLink.click();
    handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    let linkedinUrl = await browser.getUrl();
    expect(linkedinUrl).toContain("linkedin.com/company/sauce-labs");
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
  });
});
