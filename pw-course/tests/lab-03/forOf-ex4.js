// Lọc ra tất cả các phần tử duy nhất trong một mảng. 
// Ví dụ với mảng [1, 2, 3, 1, 2, 4,5] thì các phần tử duy nhất (xuất hiện 1 lần) là:
//  [3, 5]

const array = [1, 2, 3, 1, 2, 4, 5];

// Tạo một đối tượng để đếm số lần xuất hiện của mỗi phần tử
const count = {};

// Đếm số lần xuất hiện của mỗi phần tử trong mảng
for (const item of array) {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
}

// Tạo mảng chứa các phần tử duy nhất (chỉ xuất hiện một lần)
const uniqueElements = [];

// Lọc các phần tử duy nhất
for (const key in count) {
  if (count[key] === 1) {
    uniqueElements.push(Number(key));
  }
}

console.log(uniqueElements); // [3, 5]
