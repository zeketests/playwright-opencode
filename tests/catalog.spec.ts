import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test.describe('Catalog', () => {
  test('search returns matching product results', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    await homePage.goto();
    await homePage.searchFor('iPhone');

    await searchResultsPage.expectResultsFor('iPhone', 'iPhone');
  });

  test('search shows no results message for unmatched query', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    const unmatchedQuery = 'zzzz-no-products-12345';

    await homePage.goto();
    await homePage.searchFor(unmatchedQuery);

    await searchResultsPage.expectNoResultsFor(unmatchedQuery);
  });

  test('product detail page displays core product information', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.goto(31);

    await productPage.expectProductDetails('Nikon D300', 'Nikon');
  });
});
