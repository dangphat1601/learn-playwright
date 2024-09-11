function isStoreOpen(currentTime) {
    const openingTime = 9;
    const closingTime = 21;

    if (currentTime >= openingTime && currentTime <= closingTime) {
        console.log("Cua hang dang mo cua.");
    } else {
        console.log("Cua hang dang dong cua.");
    }
}
isStoreOpen(22);