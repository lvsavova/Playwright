import {test, expect, chromium, Browser, Page} from '@playwright/test';
import {HomePage} from "../pages/HomePage";
import {HeaderPage} from "../pages/HeaderPage";
import {LoginPage} from "../pages/LoginPage";
import {BrowserContext} from "playwright";

let browser: Browser;
let page: Page;

test.beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

test.afterAll(async () => {
  await browser.close();
});
test.describe.serial('Login', () => {
  test('Open Homepage', async () => {
    const homePage = new HomePage(page);
    await homePage.open();
  });

  test('Navigate to Login page', async () => {
    const headerPage = new HeaderPage(page);
    await headerPage.navigateLogin();
  });

  test('Login with user', async() => {
    const loginPage = new LoginPage(page);
    await loginPage.login("automation_user", "auto_pass");
  })
});
