import { type Locator, type Page, expect } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly noResultsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.noResultsMessage = page.getByText('There is no product that matches the search criteria.');
  }

  headingFor(query: string) {
    return this.page.getByRole('heading', { name: `Search - ${query}`, level: 1 });
  }

  productLink(productName: string) {
    return this.page.getByRole('link', { name: productName, exact: true });
  }

  async expectResultsFor(query: string, productName: string) {
    await expect(this.headingFor(query)).toBeVisible();
    await expect(this.productLink(productName).first()).toBeVisible();
  }

  async expectNoResultsFor(query: string) {
    await expect(this.headingFor(query)).toBeVisible();
    await expect(this.noResultsMessage).toBeVisible();
  }
}
