# Software Testing Automation

A comprehensive framework for automating web application testing using Playwright and modern testing tools.

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 📋 Overview

This project provides a robust testing framework for web applications using Playwright. It enables you to:

- Automate cross-browser testing (Chromium, Firefox, WebKit)
- Simulate user interactions and verify application behavior
- Create visual regression tests with screenshot comparisons
- Generate comprehensive test reports
- Execute tests in parallel for faster feedback

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>=14.x.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmmedsabbirbd/software-testing-automate.git
   ```

2. Navigate to the project directory:
   ```bash
   cd software-testing-automate
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests with UI Mode
```bash
npx playwright test --ui
```

### Run Tests in a Specific Browser
```bash
npx playwright test --project=chromium
```

### Run a Specific Test File
```bash
npx playwright test tests/example.spec.ts
```

### Generate and View Test Report
```bash
npx playwright show-report
```

## 📁 Project Structure

```
/software-testing-automate
│
├── /tests                  # Test files directory
│   ├── example.spec.ts     # Basic example tests
│   ├── form.spec.ts        # Form submission tests
│   └── visual.spec.ts      # Visual regression tests
│
├── /fixtures               # Test fixtures and helper functions
│
├── /reports                # Test execution reports
│
├── /screenshots            # Screenshot artifacts
│
├── playwright.config.ts    # Playwright configuration
│
├── package.json            # Project dependencies and scripts
│
└── README.md               # Project documentation
```

## 💻 Example Test

```typescript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Navigate to the target website
  await page.goto('https://example.com');
  
  // Assert page title
  await expect(page).toHaveTitle(/Example Domain/);
  
  // Interact with the page
  await page.click('a[href="https://www.iana.org/domains/example"]');
  
  // Verify navigation occurred
  await expect(page).toHaveURL(/iana.org/);
});
```

## 🛠️ Configuration

The project uses `playwright.config.ts` for configuration. You can customize:

- Browsers to test
- Viewport sizes
- Timeouts
- Parallel execution settings
- Report formats
- Screenshot behavior

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Testing Best Practices](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-playwright)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request