const tempValue = 30;
const tempType = "F";

if (tempType === "C") {
    // Convert from Celsius to Fahrenheit
    const tempF = tempValue * 9/5 + 32;
    console.log("Convert to F = " + tempF);
} else if (tempType === "F") {
    // Convert from Fahrenheit to Celsius
    const tempC = (tempValue - 32) * 5 / 9;
    console.log("Convert to C = " + tempC);
} else {
    console.log("Invalid temperature type");
}