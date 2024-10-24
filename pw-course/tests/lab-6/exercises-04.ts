// PascalCase
class Customer {
    id: number;
    name: string;
    email: string;
    phone: number;

    constructor(id: number, name: string, email: string, phone: number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo(){
        console.log(`-id=${this.id}, name=${this.name}, email=${this.email}, phone=${this.phone}`)
    }

    updateEmail(newEmail: string) {
        this.email = newEmail;
    }
}

const customer1 = new Customer(1, "Phat", "phat@gmail.com", 1234)
const customer2 =  new Customer(2, "Alan", "alan@gmail.com", 5678)

customer1.displayInfo();
customer1.updateEmail("dangphat@gmail.com")
customer1.displayInfo();
