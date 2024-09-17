// In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. 
// Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10

//cach 1
const student = {
    name: "Alex",
    age: 28,
}

for (const key in student) {
    console.log(`${key}=${student[key]}`);
}

// cach 2:
const student2 = {
    name: "Alex",
    age: 10
  };
  
  for (const key in student2) {
    console.log(key + '=' + student2[key]);
  }  