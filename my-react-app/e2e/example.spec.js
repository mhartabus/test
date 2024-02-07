// @ts-check
const { test } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await page.getByText('Learn React').click();
});


