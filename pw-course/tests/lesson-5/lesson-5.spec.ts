import { test } from '@playwright/test';

test('Test registration page', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//input[@id='username']").fill("Alan");
    await page.locator("//input[@id='email']").fill("test@gmail.com");
    await page.pause();
})