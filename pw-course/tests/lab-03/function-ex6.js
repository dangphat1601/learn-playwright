// Khai báo mảng chứa danh sách các sinh viên với điểm số của họ
const students = [
    { id: 1, name: "John Doe", grade: 8 },
    { id: 2, name: "Jane Smith", grade: 9 },
    { id: 3, name: "Mike Johnson", grade: 7 }
];

// Hàm tính điểm trung bình của sinh viên theo điểm số
function calculateAverageGrade(students) {
    // Kiem tra neu mang rong
    if (students.length === 0) return 0;

    // Tong tat ca diem cua sinh vien
    let totalGrade = 0;
    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i].grade;
    }

    // Tinh diem trung binh cua sinh vien
    const averageGrade = totalGrade / students.length;
    return averageGrade;
}

const average = calculateAverageGrade(students);
console.log("Diem trung binh cua sinh vien la: " + average);
