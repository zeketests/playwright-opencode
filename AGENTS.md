# Playwright Project

## Commands

- `npx playwright test` - Run all tests
- `npx playwright test --ui` - Interactive UI mode
- `npx playwright test --project=chromium` - Run specific browser
- `npx playwright test login` - Run single test file
- `npx playwright test catalog` - Run catalog tests
- `npx playwright codegen` - Generate tests from browser
- `npx playwright show-trace` - View trace
- `npx playwright show-report` - View HTML report

## Project Structure

```
docs/               - Test strategy and planning docs
  testing-plan.md
pages/              - Page Object Models (POM)
  HomePage.ts
  LoginPage.ts
  ProductPage.ts
  SearchResultsPage.ts
test-data/          - Test data (credentials, config)
  credentials.ts
tests/              - Test specs
  catalog.spec.ts
  login.spec.ts
playwright.config.ts
```

## Config

- `baseURL`: https://ecommerce-playground.lambdatest.io/
- 3 browsers: chromium, firefox, webkit

## Notes

- CI enforces `forbidOnly` (no `test.only` left in code)
- Traces captured on first retry
- Use POM for page interactions, keep test data in test-data/
- Prefer role, label, heading, and visible-text locators before CSS selectors
- Avoid `waitForTimeout`; rely on Playwright locator assertions and auto-waiting
- Current P0 coverage includes login, product search, no-results search, and product detail smoke tests
- Cart/checkout are documented as P1 in `docs/testing-plan.md`; inspect stable in-stock products before implementing those tests

## Browser Automation (playwright-cli)

A `playwright-cli` skill is installed at `.claude/skills/playwright-cli/SKILL.md`. Claude-based agents load it automatically. Other agents should read it manually before doing browser automation tasks.

Use it to inspect real selectors before writing tests:

```bash
playwright-cli open https://ecommerce-playground.lambdatest.io/
playwright-cli snapshot
playwright-cli click e271        # interact using ref from snapshot
playwright-cli close
```

Key references:
- `.claude/skills/playwright-cli/references/element-attributes.md` - inspecting selectors
- `.claude/skills/playwright-cli/references/test-generation.md` - generating tests
