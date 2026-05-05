import { type Locator, type Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productCode: Locator;
  readonly availability: Locator;
  readonly price: Locator;
  readonly quantityInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCode = page.locator('li', { hasText: 'Product Code:' });
    this.availability = page.locator('li', { hasText: 'Availability:' });
    this.price = page.getByRole('heading', { level: 3 }).filter({ hasText: /^\$/ });
    this.quantityInput = page.getByRole('spinbutton', { name: 'Qty' });
  }

  heading(productName: string) {
    return this.page.getByRole('heading', { name: productName, level: 1 });
  }

  brandLink(brandName: string) {
    return this.page.getByRole('link', { name: brandName, exact: true });
  }

  async goto(productId: number) {
    await this.page.goto(`/index.php?route=product/product&product_id=${productId}`);
  }

  async expectProductDetails(productName: string, brandName: string) {
    await expect(this.heading(productName)).toBeVisible();
    await expect(this.productCode).toBeVisible();
    await expect(this.brandLink(brandName)).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.price.first()).toBeVisible();
    await expect(this.quantityInput).toHaveValue('1');
  }
}
