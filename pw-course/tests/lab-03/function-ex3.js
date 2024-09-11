const number = [1, 2, 3, 4, 5];

function sumArray (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const total = sumArray(number);
console.log(`Tong cac phan tu trong mang la: ${total}`);