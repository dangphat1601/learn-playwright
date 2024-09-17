// Tính tổng các giá trị số của các thuộc tính trong một đối tượng. 
// Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20).

const student = {
    name: "Alex",
    age: 25,
    salary: 20,
};

let total = 0;

for (const key in student) {
    if (typeof student[key] === 'number') {
        total += student[key];
    }
};

console.log(total);