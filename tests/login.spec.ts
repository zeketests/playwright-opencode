import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../test-data/credentials';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('login with valid credentials', async ({ page }) => {
    await loginPage.login(testData.users.valid.email, testData.users.valid.password);
    await expect(page).toHaveURL(/route=account\/account/);
  });

  test('login with invalid credentials shows error', async () => {
    await loginPage.login(testData.users.invalid.email, testData.users.invalid.password);
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
