import { test } from '@playwright/test';

test('TodoPage', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 3: Todo page']").click();

    for (let i = 1; i <= 100; i++) {
        await page.fill('//input[@placeholder="Enter a new task"]', `To do ${i}`);
        await page.locator("//button[text()='Add Task']").click();
    }

    await page.pause();
})