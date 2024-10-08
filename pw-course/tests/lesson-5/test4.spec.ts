import { test } from '@playwright/test';

test('PersonalNotesPage', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 4: Personal notes']").click();

    await page.goto("https://vnexpress.net/khoa-hoc");
    const articles = await page.locator('h3.title a').allInnerTexts();

    // Thêm 10 note
    for (let i = 0; i < Math.min(10, articles.length); i++) {
        const title = articles[i];
        const content = `Nội dung cho note số ${i + 1}: Đây là một phần mô tả ngắn gọn cho tiêu đề "${title}".\n\nĐây là phần mô tả chi tiết hơn cho note này.\n\nBạn có thể thêm nhiều thông tin hơn nếu cần.`;
        
        await page.fill('input[placeholder="Title"]', title);
        await page.fill('textarea[placeholder="Content"]', content);
        await page.locator("text='Add'").click(); // Nhấn nút thêm note
    }

    // Tìm kiếm theo tiêu đề bài báo bất kỳ
    const randomTitle = articles[0]; // Chọn một tiêu đề ngẫu nhiên
    await page.fill('input[placeholder="Search"]', randomTitle); // Giả sử có một ô tìm kiếm
    await page.locator("text='Search'").click(); // Nhấn nút tìm kiếm

    // Dừng lại để kiểm tra kết quả
    await page.pause();

})