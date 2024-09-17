// Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. 
// Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

const numbers = [1, 2, 3];
const doubleNumbers = [];

numbers.forEach(element => {
    doubleNumbers.push(element * 2);
});

console.log(doubleNumbers);