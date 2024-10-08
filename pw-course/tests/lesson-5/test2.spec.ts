import { test } from '@playwright/test';

test('ProductPage', async ({page}) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 2: Product page']").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id=1]").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id=1]").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id=2]").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id=2]").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id=2]").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id=3]").click();

    await page.locator("//tr[td[1]='Product 1' and td[3]='2']").isVisible;
    await page.locator("//tr[td[1]='Product 2' and td[3]='3']").isVisible;
    await page.locator("//tr[td[1]='Product 3' and td[3]='1']").isVisible;

    await page.pause();
})

// Cach 2:
test('ProductPage2', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 2: Product page']").click();

    const products = [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 3 },
        { id: 3, quantity: 1 }
    ];

    // Thêm sản phẩm vào giỏ hàng
    for (const { id, quantity } of products) {
        for (let i = 0; i < quantity; i++) {
            await page.locator(`//button[@class='add-to-cart' and @data-product-id='${id}']`).click();
        }
    }

    // Kiểm tra sự hiển thị của các sản phẩm trong giỏ hàng
    for (const { id, quantity } of products) {
        const isVisible = await page.locator(`//tr[td[1]='Product ${id}' and td[3]='${quantity}']`).isVisible();
        console.log(`Sản phẩm ${id} hiển thị: ${isVisible}`);
    }

    await page.pause();
});

// cach 3: 
test('ProductPage3', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 2: Product page']").click();

    // Thêm sản phẩm vào giỏ hàng
    await page.locator("//button[@class='add-to-cart' and @data-product-id='1']").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id='1']").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id='2']").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id='2']").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id='2']").click();
    await page.locator("//button[@class='add-to-cart' and @data-product-id='3']").click();

    // Kiểm tra sự hiển thị của các sản phẩm
    const productChecks = [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 3 },
        { id: 3, quantity: 1 }
    ];

    for (const { id, quantity } of productChecks) {
        const isVisible = await page.locator(`//tr[td[1]='Product ${id}' and td[3]='${quantity}']`).isVisible();
        console.log(`Sản phẩm ${id} hiển thị: ${isVisible}`);
    }

    await page.pause();
});
