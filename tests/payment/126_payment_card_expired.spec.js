// @ts-check
const { test, expect } = require('@playwright/test');
const utilities = require('../utilities');

test('126 Payment - Card Expired', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('').selectOption('126_paymentCardExpired');

  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByRole('button', { name: 'Send' }).click();

  await utilities.enterPin(page);

  await expect(page.locator('text=/PaymentRequest/')).toBeVisible();
  await expect(page.locator('text=/PaymentResponse/')).toBeVisible();
  await expect(page.locator('text=/"Refusal"/')).toBeVisible();
  await expect(page.locator('text=/CARD_EXPIRED/')).toBeVisible();
});