// Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. 
// Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]

const object = {
    name: "Alex",
    age: 10,
};

const newObject = [];

for (const key in object) {
    newObject.push(key);
};

console.log(newObject);