// Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". hãy tìm từ đầu tiên có độ dài lớn hơn 5 ký tự

class WordFinder {
    words: string[];

    constructor(words: string[]) {
        this.words = words;
    }

    findFirstLongWord(): string | undefined {
        return this.words.find(words => words.length > 5);
    }
}

const words = ["apple", "banana", "cherry", "date"];

const wordFinder = new WordFinder(words);

const firstLongWord = wordFinder.findFirstLongWord();

console.log(`Từ đầu tiên có độ dài lớn hơn 5 ký tự là: ${firstLongWord}`);