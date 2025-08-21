import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import loginPage from "../pageobjects/login.page.js";

Given("User is located on the main page of saucedemo website", async () => {
  await loginPage.open();
});

When('User clicks "Login" button', async () => {
  await loginPage.clickLogin();
});

Then(
  'User should see "Epic sadface: Username is required" error message',
  async () => {
    const actualMessage = await loginPage.getErrorText();
    expect(actualMessage).to.equal("Epic sadface: Username is required");
  }
);
