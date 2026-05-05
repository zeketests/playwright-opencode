import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Search For Products' });
    this.searchButton = page.getByRole('button', { name: 'Search', exact: true });
  }

  async goto() {
    await this.page.goto('/');
  }

  async searchFor(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}
