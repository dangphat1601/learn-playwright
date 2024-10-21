//const a = 5;

// if (a > 0) {
//     console.log("Number is positive");
// } else {
//     console.log("Number is not positive");
// }

// Xep hang:
// < 5 -> kem
// 5 -7 -> trung binh
// 7 - 9 -> kha
// 9 -10 -> gioi

const grace = 10;
if (grace < 5) {
    console.log("Kem");
} else if (grace >= 5 && grace < 7) {
    console.log("Trung binh");
} else if (grace >= 7  && grace < 9) {
    console.log("Kha");
} else {
    console.log("Gioi");
}

// In ra ten ngay trong tuan
// 2 -> Thu 2
// 7 -> Thu 7

const thu = 5;

switch (thu) {
    case 2: 
        console.log("Thu 2");
        break;
    case 3:
        console.log("Thu 3");
        break;
    case 4:
        console.log("Thu 4");
        break;
    case 5:
        console.log("Thu 5");
        break;
    case 6:
        console.log("Thu 6")
        break;
    case 7:
        console.log("Thu 7");
        break;
    case 8:
        console.log("Chu nhat");
        break;
    default:
        console.log("Ngay khong hop le");
}
