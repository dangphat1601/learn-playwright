// In ra các giá trị chia hết cho 3 từ 1000 đến 2000

// bài 1: chỉ in ra các số chia hết cho 3
// for (let i = 1000; i <= 3000; i++) {
//     if (i % 3 == 0) {
//         console.log(i);
        
//     }
// }

// bài 2:  in ra các số chia hết cho 3 & in ra tổng số có thể chia hết cho 3
let count = 0;

for (let i = 1000; i <= 3000; i++) {
    if (i % 3 == 0) {
        console.log(i);
        count++;
    }
}

console.log('Tong so so chia het cho 3:', count);