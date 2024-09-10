// Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.

const settings = {
    volume: 45,         // Giá trị ban đầu của volume
    brightness: 100,    // Giá trị ban đầu của brightness
};

// Thay đổi giá trị của thuộc tính volume
settings.volume = 66;    // Thay đổi giá trị của volume

// In ra object mới
console.log(settings);