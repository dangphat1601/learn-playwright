const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1.5];

function soNguyenTo(so) {
    if (!Number.isInteger(so)) return false; // Kiểm tra nếu không phải là số nguyên
    if (so <= 1) return false;  // so 0 & 1 khong phai la so nguyen to
    for (let i = 2; i < so; i++) {
        if (so % i === 0) return false;  // Nếu chia hết cho bất kỳ số nào từ 2 đến so-1
    } 
    return true;  // Nếu không tìm thấy ước số nào, thì là số nguyên tố
}

// Ham loc ra cac so nguyen to trong mot mang
function filterSoNguyenTo(array) {
    return array.filter(soNguyenTo);
} 

// loc va in ra cac so nguyen to trong mot mang
const primes = filterSoNguyenTo(array);
console.log("So nguyen to la cac so: ", primes);

