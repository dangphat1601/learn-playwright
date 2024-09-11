function PriceService(age) {
    if (age <= 0){
        console.log("Age is incorrect");
    } else if (age <= 5) {
        console.log("Price service is 0 VND");
    } else if (age >= 6 && age <= 17) {
        console.log("Price service is 50.000 VND");
    } else {
        console.log("Price service is 100.000 VND");
    }
}

PriceService(1);