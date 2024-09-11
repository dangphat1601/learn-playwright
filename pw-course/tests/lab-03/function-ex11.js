function checkRanking(rank) {
    if (rank > 10) {
        console.log("Invalid");
    } else if (rank >= 8) {
        console.log("Gioi");
    } else if (rank >= 6.5 && rank <= 8) {
        console.log("Kha");
    } else if (rank >= 5 && rank <= 6.5) {
        console.log("Trung binh");
    } else {
        console.log("Yeu");
    }
}

checkRanking(3);