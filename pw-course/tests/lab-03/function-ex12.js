// Hàm kiểm tra trạng thái thời tiết dựa trên nhiệt độ
function checkWeather(temperature) {
    if (temperature >= 30) {
        console.log("Trạng thái thời tiết: Nóng");
    } else if (temperature >= 20) {
        console.log("Trạng thái thời tiết: Mát");
    } else {
        console.log("Trạng thái thời tiết: Lạnh");
    }
    console.log(`Nhiệt độ hiện tại là: ${temperature}°C`);
}

// Ví dụ kiểm tra với nhiệt độ là 35 độ C
checkWeather(35); // Output: Nhiệt độ hiện tại là: 35°C / Trạng thái thời tiết: Nóng

// Ví dụ kiểm tra với nhiệt độ là 25 độ C
checkWeather(25); // Output: Nhiệt độ hiện tại là: 25°C / Trạng thái thời tiết: Mát

// Ví dụ kiểm tra với nhiệt độ là 15 độ C
checkWeather(15); // Output: Nhiệt độ hiện tại là: 15°C / Trạng thái thời tiết: Lạnh