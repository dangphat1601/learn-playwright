// khai bao
const str = "John";
const age = 30;
const isman = true;

const person = {
    name: "John",
    age: 30,
    isMan: true,
    "far from workplace": 45,
    favorite: "Soccer",

    "address": {
        street: "123 Main St",
        city: "New York",
        state: "NY"
        //... more properties here...  // not shown in this example
    }
}

// su dung 
console.log(person.name);
console.log(person["far from workplace"]);
console.log(person.favorite);
console.log(person.address.city);
console.log(person["address"]["street"]);

// gan lai
person.age = 25;