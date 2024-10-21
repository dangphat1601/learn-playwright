// practice
// Student co cac thuoc tinh: name = "Alex", class, finalGrade = 8.5
    // class: name:"K6", "major":"Automantion"

const { cp } = require("fs");

    const student = {
        name: "Alex",
        class: {
            name: "K6",
            major: "Automation",
        },
        finalGrade: 8.5
    }

    console.log(student.name);
    console.log("Name: " + student.name + " Major: " + student.class.major + " Final Grade: " + student.finalGrade);