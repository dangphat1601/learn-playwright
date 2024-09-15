// In ra 10 email dựa trên tên người dùng và số thứ tự

// cach 1:
const users = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const email = `${user.toLowerCase().replace(/\s/g, "_")}@example.com`;
    console.log(`Email ${i+1}: ${email}`);
}


// cach 2: 
const userName = "user";
for (let i = 1; i <= 10; i++) {
    const email = `${userName}${i}@example.com`;
    console.log(`Email ${i}: ${email}`);
}

// cach 3: dung ham tao email tu ten nguoi dung va so thu tu

function generateEmail(uerName, index) {
    return `${userName}${index}@example.com`;
}

const userName1 = "user";

for (let i = 1; i <= 10; i++) {
    const email = generateEmail(userName1, i);
    console.log(`Email ${i}: ${email}`);
}