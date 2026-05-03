# Playwright Test Automation

End-to-end tests for [LambdaTest E-commerce Playground](https://ecommerce-playground.lambdatest.io/).

Created with the help of [opencode](https://opencode.ai/).

## Quick Start

```bash
npm install
npx playwright install
```

## Test Target

- Base URL: `https://ecommerce-playground.lambdatest.io/`
- Config file: `playwright.config.ts`
- Browsers: Chromium, Firefox, WebKit

## Run Tests

```bash
# All browsers
npx playwright test

# Single browser
npx playwright test --project=chromium

# Interactive UI
npx playwright test --ui

# Single test file
npx playwright test login

# Headed mode
npx playwright test --headed
```

## Project Structure

```
pages/           - Page Object Models
  LoginPage.ts
test-data/       - Test data (credentials)
  credentials.ts
tests/           - Test specs
  login.spec.ts
.github/workflows/
  test.yml       - GitHub Actions test workflow
playwright.config.ts
```

## Test Design

- Page interactions live in `pages/` using the Page Object Model pattern.
- Test data lives in `test-data/`; avoid hardcoding credentials or URLs inside specs.
- Login tests navigate directly to `/index.php?route=account/login` because the homepage does not expose a simple `Login` link.
- Invalid login assertions check the alert visibility because the site can return either bad-credentials or rate-limit warnings.

## View Reports

```bash
# HTML report
npx playwright show-report

# Trace viewer
npx playwright show-trace
```

## Generate Tests

```bash
npx playwright codegen https://ecommerce-playground.lambdatest.io/ -o tests/
```

## Inspect Selectors

This repo includes a local `playwright-cli` skill at `.claude/skills/playwright-cli/`. Use it to inspect real selectors before writing or changing tests:

```bash
playwright-cli open https://ecommerce-playground.lambdatest.io/
playwright-cli snapshot
playwright-cli close
```

## CI

GitHub Actions runs Playwright tests on pushes and pull requests targeting `main` or `master`.
