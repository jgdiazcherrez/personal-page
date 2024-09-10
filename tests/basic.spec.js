const { test, expect } = require('@playwright/test');
const { config } = require('dotenv');

config();

const host = process.env.HOST || 'http://localhost:3000';

test.describe('Personal page', () => {
  test('about me', async ({ page }) => {
    await page.goto(host);
    // await page.isVisible("h1='Jonathan Díaz'");
    await expect(page.locator('#mainTitle')).toHaveText('Jonathan Díaz');
    await expect(page).toHaveTitle(/Jonathan/);
    await expect(page.locator('#headerTitle')).toHaveText('About Me');
  });

  test('technologies', async ({ page }) => {
    await page.goto(host);
    await page.locator('.MuiPaper-root button.MuiButtonBase-root').nth(0).click();
    await page.locator('[role="button"]').nth(1).click();
    await expect(page.locator('#headerTitle')).toHaveText('Technologies');
  });

  test('portfolio', async ({ page }) => {
    await page.goto(host);
    await page.locator('.MuiPaper-root button.MuiButtonBase-root').nth(0).click();
    await page.locator('[role="button"]').nth(2).click();
    await expect(page.locator('#headerTitle')).toHaveText('Experience');
  });
});
