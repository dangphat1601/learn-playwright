// BMI = weight / (height * height)

const height = 1.70;
const weight = 78;
const bmi = weight / (height * height);

//console.log(bmi);

function printBMI(bmi) {
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi < 25) {
        console.log("Normal weight");
    } else if (bmi < 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}

printBMI(bmi);