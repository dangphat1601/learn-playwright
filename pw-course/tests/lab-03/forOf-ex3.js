// Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. 
// Ví dụ với chuỗi ”Playwright” thì mảng kết quả sẽ là
// [“t”, “h”, “g”, “i”, “r”, “w”, “y”, “a”, “l”, “P”]


// cach 1: 
const str = "Playwright";
const reversedArray = [];

// Lặp qua chuỗi từ cuối đến đầu
for (const char of str) {
  reversedArray.unshift(char); // Thêm ký tự vào đầu mảng
}

console.log(reversedArray); // ["t", "h", "g", "i", "r", "w", "y", "a", "l", "P"]


// cach 2:
const str2 = "Playwright";
const reversedArray2 = [];

// Lặp qua chuỗi và thêm ký tự vào cuối mảng
for (const char of str2) {
  reversedArray2.push(char);
}

// Đảo ngược mảng để có thứ tự nghịch đảo
reversedArray2.reverse();

console.log(reversedArray2); // ["t", "h", "g", "i", "r", "w", "y", "a", "l", "P"]
