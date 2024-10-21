let depaturePlanet =  "Trái Đất";
let mission = "Khám phá vũ trụ";
let crew = ["Phát 01", "Phát 02", "Phát 03", "Phát 04"];

function launchShip(crew) {             // Định nghĩa một hàm launchShip nhận tham số là crew.
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(",")} sẽ đồng hành cùng bạn!`;     // crew.join(", ") chuyển mảng crew thành một chuỗi, các phần tử được ngăn cách bởi dấu phẩy và khoảng trắng.
}

console.log(launchShip(crew));

function calculateDistance(speed, time) {
    return speed * time;
}

console.log(calculateDistance(1000, 24));

function convertTimeToHex(time) {       // Định nghĩa một hàm convertTimeToHex nhận tham số time (thời gian).
    return time.toString(16);           // Sử dụng phương thức toString(16) để chuyển đổi time sang hệ thập lục phân và trả về giá trị đó.
}

console.log(convertTimeToHex(120));

function decryptCode(code) {            // Định nghĩa một hàm decryptCode nhận tham số code (chuỗi mật mã).
    let decryted = "";                  // Khai báo biến decrypted để lưu trữ kết quả giải mã
    for (let i = 0; i < code.length; i++) { 
        // Dòng này định nghĩa một vòng lặp chạy từ i = 0 đến i < code.length. Nghĩa là nó sẽ duyệt qua từng ký tự trong chuỗi code.
        let char = code[i]; // lay ky tu ra
         // Biến char được khai báo để lưu trữ ký tự tại vị trí i trong chuỗi code
         // code[i] là cú pháp để truy cập ký tự tại chỉ số i trong chuỗi code.
         // Ví dụ, nếu code là "Hello World!" và i là 0, thì code[i] sẽ là 'H'.
        if (char === char.toLowerCase()) {
            decryted += char.toUpperCase();
            // Đoạn mã này kiểm tra nếu ký tự char là chữ thường (char === char.toLowerCase()), thì nó sẽ chuyển đổi ký tự đó thành chữ hoa (char.toUpperCase()) và thêm vào chuỗi decrypted.
        } else {
            decryted += char.toLowerCase();
            // Ngược lại, nếu ký tự char là chữ hoa, thì nó sẽ chuyển đổi ký tự đó thành chữ thường (char.toLowerCase()) và thêm vào chuỗi decrypted.
        }
    }
    return decryted;
}

console.log(decryptCode("Hello World!"));



function returnToEarth() {
    console.log("Chuẩn bị trở về!");
}

returnToEarth();

// Tóm tắt chức năng của let char = code[i];
// Mục đích: Lưu trữ ký tự hiện tại trong chuỗi code tại vị trí i.
// Chức năng: Giúp kiểm tra và chuyển đổi ký tự hiện tại từ chữ hoa thành chữ thường hoặc ngược lại.
// Vai trò trong hàm: Đóng vai trò quan trọng trong việc duyệt qua từng ký tự của chuỗi code và thực hiện chuyển đổi cần thiết để giải mã chuỗi.
// Ví dụ minh họa:

// Nếu code là "Hello":
// Khi i = 0, char = code[i] sẽ là 'H'.
// Khi i = 1, char = code[i] sẽ là 'e'.
// Khi i = 2, char = code[i] sẽ là 'l'.
// Khi i = 3, char = code[i] sẽ là 'l'.
// Khi i = 4, char = code[i] sẽ là 'o'.
// Trong mỗi vòng lặp, char sẽ đại diện cho một ký tự của code và được sử dụng để kiểm tra và chuyển đổi theo yêu cầu.