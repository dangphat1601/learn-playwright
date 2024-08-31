// a. Lặp từ 1 tới 100
// b. Trong mỗi vòng lặp, in ra:
// i. Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
// ii. Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”

//cách 1: không in ra giá trị của i
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log("So <i> la so chan");
//     } else {
//         console.log("So <i> la so le");
//     }
// }


//cách 2: in ra giá trị của i - sử dụng template literals để  nhúng giá trị của biến trực tiếp vào chuỗi
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`So ${i} la so chan`);
    } else {
        console.log(`So ${i} la so le`);
    }
}