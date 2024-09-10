// Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english

const student = {
    name: "Alan",
    grades: {
        math: 8,
        english: 7,
    }
};

const mathGrade = student["grades"]["math"];
const englishGrace =  student["grades"]["english"];

console.log(mathGrade);
console.log(englishGrace);