// hãy tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy tìm điểm số đầu tiên lớn hơn 80.

class Excercises01 {
    scores: number[];

    constructor(scores: number[]) {
        this.scores = scores;
    }

    findFirstScore(): number | undefined {
        return this.scores.find(score => score > 80);
    }
}

const scores = [85, 90, 78];
const studentScores = new Excercises01(scores);
const findFirstScore = studentScores.findFirstScore();
console.log(`Diem so dau tien lon hon 80 la: ${findFirstScore}`);