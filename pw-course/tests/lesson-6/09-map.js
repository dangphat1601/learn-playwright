// MAP
const arr1 = [3, 4, 2, 1];

// tao ra mang moi co gia tri gap doi ban dau
// const newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//     const currentItem = arr1[i];
//     const newItem = currentItem * 2;

//     newArr.push(newItem);
// }

// console.log(newArr);

const newArr1 = arr1.map(item => item*2);
console.log(newArr1);   // [ 6, 8, 4, 2 ]

const arr2 = ["Abc", "Xyz"];
const newArr2 = arr2.map(item => item.toUpperCase());
console.log(newArr2);   // [ 'ABC', 'XYZ' ]


const arr3 = ["troi mua", "troi nang", "khong may"];
const newArr3 = arr3.map(item => item.includes("troi"));
console.log(newArr3);   // [ true, true, false ]

const arr4 = [" myStr1 ", " myStr2", "myStr3 "];
const newArr4 = arr4.map(item => item.trim().toUpperCase());
console.log(newArr4);   // [ 'MYSTR1', 'MYSTR2', 'MYSTR3' ]