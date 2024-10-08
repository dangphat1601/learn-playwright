// function printPhat() {
//     console.log("Phat");
// }

// printPhat();

// function print1To100() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }
// print1To100();

function printName(name) {
    console.log(`${name}`);
}

printName("dang phat");

function printSoChan(so) {
    if (so % 2 === 0) {
        console.log(`${so} la so chan`);
    }
}

//printSoChan(2);
for (let i = 1; i < 10; i++) {
    printSoChan(i);
}
