const myHeight = 170;
const oldHeight = myHeight % 100;
const idealWeight = (oldHeight * 9) / 10;
const maxWeight = oldHeight;
const minWeight = (oldHeight * 8) / 10;

// console.log("Can nang ly tuong: " + idealWeight + " " + "Can nang toi da: " + maxWeight + " " + "Can nang toi thieu: " + minWeight);
console.log(`Can nang ly tuong: ${idealWeight} kg, Can nang toi da: ${maxWeight} kg, Can nang toi thieu: ${minWeight} kg`);