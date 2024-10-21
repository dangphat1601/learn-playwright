// reduce() = tính toán giá trị duy nhất bằng cách áp dụng hàm lên phần tử của mảng (thường dùng tính tổng, tích)

const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, num) => acc + num, 0);

console.log(sum); 