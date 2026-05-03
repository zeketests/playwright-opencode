import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../test-data/credentials';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickLoginLink();
  });

  test('login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickLoginLink();
    await loginPage.login(testData.users.valid.email, testData.users.valid.password);
    await loginPage.successMessage.waitFor();
  });

  test('login with invalid credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickLoginLink();
    await loginPage.login(testData.users.invalid.email, testData.users.invalid.password);
    await loginPage.errorMessage.waitFor();
  });
});