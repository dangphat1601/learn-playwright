// Khai báo mảng global các object có 2 thuộc tính: name, email

const user = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
    { name: "Mike Johnson", email: "mike.johnson@example.com" },
]; 

// Khai bao ham co 2 tham so: name, newEmail
function updateEmail(name, newEmail) {
    // su dung vong for, duyet trong mang
    for (let i = 0; i < user.length; i++) {
        // Neu gap phan tu nao co ten trung voi tham so name
        if(user[i].name === name) {
            // cap nhat gia tri cua email ve newEmail
            user[i].email = newEmail;
            break; // ket thuc vong for sau khi tim thay va cap nhat
        }
    }
}

// cap nha email cho user John Doe
updateEmail("John Doe", "john.doe_update_new@nexample.com");

console.log(user);