class lessson6 {
    // thuoc tinh
    // ham tao
    // function
}

class MyStudent {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayMyName() {
        console.log(`My name is ${this.name}`);
    }
}

const student1 = new MyStudent("Phat", 20);
const student2 = new MyStudent("Alan", 28);