// hãy tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy tìm tuổi đầu tiên lớn hơn 20.

class AgeFinder {
    ages: number[];

    constructor(ages: number[]) {
        this.ages = ages;
    }

    findFirstAge(): number | undefined {
        return this.ages.find(age => age > 20);
    }
}

const ages = [18, 21, 16, 25];
const ageFinder = new AgeFinder(ages);
const findFirstAge = ageFinder.findFirstAge();
console.log(`Tuổi đầu tiên lớn hơn 20 là: ${findFirstAge}`);