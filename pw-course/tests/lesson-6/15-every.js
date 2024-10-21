// every() => kiem tra xem tat ca cac phan tu trong mang co thoa man dieu kien cho truoc khong

const arr = [1, 2, 3, 4];
const allEven = arr.every(num => num % 2 === 0);

console.log(allEven);