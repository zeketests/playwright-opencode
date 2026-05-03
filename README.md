# Playwright Test Automation

End-to-end tests for [LambdaTest E-commerce Playground](https://ecommerce-playground.lambdatest.io/).

Created with the help of [opencode](https://opencode.ai/).

## Quick Start

```bash
npm install
npx playwright install
```

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
```

## Project Structure

```
pages/           - Page Object Models
  LoginPage.ts
test-data/       - Test data (credentials)
  credentials.ts
tests/           - Test specs
  login.spec.ts
playwright.config.ts
```

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