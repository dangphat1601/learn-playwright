// Khai báo giỏ hàng với các sản phẩm
const cart = [
    { name: "product 1", price: 100 },
    { name: "product 2", price: 50 },
    { name: "product 3", price: 25 }
];

// Hàm kiểm tra xem tất cả sản phẩm có giá lớn hơn 0 không
function allProductsAboveZero(cart) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].price <= 0) {
            return false; // Nếu tìm thấy sản phẩm có giá <= 0, trả về false
        }
    }
    return true; // Nếu không tìm thấy sản phẩm nào có giá <= 0, trả về true
}

// Kiểm tra và in ra kết quả
const result = allProductsAboveZero(cart);
console.log("Tất cả sản phẩm đều có giá lớn hơn 0:", result);