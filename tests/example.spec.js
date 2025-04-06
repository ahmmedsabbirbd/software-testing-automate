// @ts-check
import { test, expect } from '@playwright/test';

test('fill and submit form without closing', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://demo.aisk.chat/');

  // Click the button with class "modern-chat-bubble"
  await page.click('.modern-chat-bubble');  // Clicking the button with the class "modern-chat-bubble"

  // Fill the input field with a message
  await page.fill('.support-buddy-input input[type="text"]', 'Hello, this is a test message!');

  // Click the submit button
  await page.click('.support-buddy-input button[type="submit"]');

  // Optional: Take a screenshot after submission
  await page.screenshot({ path: 'test-results/form-submission.png' });

  // Pause the test for manual inspection
  await page.pause(); // This will pause the test and keep the browser open
});
