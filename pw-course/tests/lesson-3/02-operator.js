const a = 5;
const b = 2;
const c = 1;

const result1 = a > b;
const result2 = b > c;

let result;

if (result1 == true && result2 == true) {
    result = true;
}

const isRain = true;
const isSunny = false

if (isRain == true || isSunny == true) {
    console.log("It's raining or sunny");
}

const isMuchMoney = false;
const isMyValue = !isMuchMoney;
console.log(isMyValue);