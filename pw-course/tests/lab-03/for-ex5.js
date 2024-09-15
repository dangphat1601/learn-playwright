// Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}

const revenue = [
    { month: 1, total: 500 },
    { month: 2, total: 1200 },
    { month: 3, total: 800 },
    { month: 4, total: 1500 },
    { month: 5, total: 1000 },
    { month: 6, total: 1800 },
    { month: 7, total: 2200 },
    { month: 8, total: 1400 },
    { month: 9, total: 1100 },
    { month: 10, total: 1600 },
    { month: 11, total: 1900 },
    { month: 12, total: 1300 },
];

// Hàm tính tổng doanh thu
function calculateTotalRevenue(revenueArray) {
    let totalRevenue = 0;
    for (let i = 0; i < revenueArray.length; i++) {
        totalRevenue += revenueArray[i].total;
    }
    return totalRevenue;
}

// Tính tổng doanh thu
const totalRevenue = calculateTotalRevenue(revenue);

// In ra tổng doanh thu
console.log("Tổng doanh thu của 12 tháng là: " + totalRevenue);