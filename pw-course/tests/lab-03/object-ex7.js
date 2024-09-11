//Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này

const employee = {
    name: "John Smith",
    age: 28,
};

// Xóa thuộc tính age

delete employee.age;

console.log(employee);