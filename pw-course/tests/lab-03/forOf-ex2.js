// Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước. 
// Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3
// thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4

const array = [1, 2, 3, 4, 3, 55, 23];
const value = 3;

let firstIndex = -1; // Khởi tạo giá trị đầu tiên không tìm thấy
let lastIndex = -1;  // Khởi tạo giá trị không tìm thấy

// Sử dụng vòng lặp for...of để lặp qua các phần tử và chỉ số của mảng
for (const [index, element] of array.entries()) {
  if (element === value) {
    if (firstIndex === -1) {
      firstIndex = index; // Gán giá trị chỉ số đầu tiên
    }
    lastIndex = index; // Cập nhật giá trị chỉ số cuối cùng
  }
}

console.log('Vị trí đầu tiên:', firstIndex);
console.log('Vị trí cuối cùng:', lastIndex);
