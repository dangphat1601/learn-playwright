import { test } from '@playwright/test';

test('RegisterPage', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    await page.locator("//input[@id='username']").fill("test");
    await page.locator("//input[@id='email']").fill("test@gmail.com");
    await page.locator("//input[@id='male']").check();
    await page.locator("//input[@id='traveling']").check();
    //  await page.locator("//option[@value='music']").check();
    await page.locator("//select[@id='country']").selectOption({ label: 'Canada' });
    // await page.locator("//input[@id='dob']").fill("16/01/1996");
    await page.locator("//textarea[@id='bio']").fill("Hello, world!");
    await page.locator("//span[@class='slider round']").click();
    await page.locator("//button[text()='Register']").click();

    await page.pause();
})
