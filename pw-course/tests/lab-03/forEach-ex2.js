// Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. 
// Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3

const numbers = [1, 2, 3];

let total = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach(element => {
    total += element;
    if (element > max) {
        max = element;
    }
    if (element < min) {
        min = element;
    }
});

console.log('Tong: ', total);
console.log('Gia tri lon nhat: ', max);
console.log('Gia tri nho nhat: ', min);