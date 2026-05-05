# Playwright Testing Plan

## Scope

Target application: LambdaTest E-commerce Playground.

Base URL: `https://ecommerce-playground.lambdatest.io/`

This framework focuses on high-value end-to-end coverage for critical ecommerce paths using Playwright and the Page Object Model.

## Test Priorities

### P0 - Critical Smoke Coverage

- Login accepts valid credentials and lands on the account page.
- Login rejects invalid credentials and displays an error alert.
- Product search returns matching product results.
- Product search handles no-result queries gracefully.
- Product detail pages display core purchasable product information.

### P1 - Checkout Funnel Coverage

- Add an in-stock product to cart.
- Cart shows the selected product, quantity, and subtotal.
- Guest or authenticated checkout reaches the payment step.
- Required checkout fields show validation errors.

### P2 - Supporting Coverage

- Category navigation loads product listings.
- Product sorting and filtering update visible results.
- Wishlist requires authentication for anonymous users.
- Responsive smoke checks for mobile viewport navigation.

## Implemented Tests

- `tests/login.spec.ts` covers valid and invalid login.
- `tests/catalog.spec.ts` covers product search success, search no-results, and product detail content.

## Playwright Practices

- Keep selectors user-facing where possible: roles, labels, headings, and visible text.
- Keep page interactions in `pages/`; specs should read like business flows.
- Store reusable data in `test-data/`, not directly inside specs.
- Prefer direct navigation for deterministic setup when the UI path adds no value to the assertion.
- Avoid `waitForTimeout`; rely on locator assertions and Playwright auto-waiting.
- Avoid `force: true` unless documenting a real product limitation.

## Current Risk Notes

- Cart and checkout tests are prioritized but not implemented yet because inspected product pages showed disabled stock-state buttons and homepage cart icon interactions were blocked by page overlays during browser inspection.
- Add cart coverage should be added once stable in-stock product selectors are identified.
