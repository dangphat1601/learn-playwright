import { it } from "node:test";

class Product {
    name: string;
    price: number;
    amount: number;
    discount: number;

    constructor(name: string, price: number, amount: number, discount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    }
}

class Order {
    orderID: number;
    customerName: string;
    items: Product[];
    totalAmount: number;

    constructor(oderID: number, customerName: string) {
        this.orderID = oderID;
        this.customerName = customerName;

        this.items = [];
        this.totalAmount = 0;
    }

    addItem(name: string, price: number, amount: number, discount: number) {
        const newProduct = new Product(name, price, amount, discount);
        this.items.push(newProduct);
    }

    addItem2(newProduct: Product) {
        this.items.push(newProduct);
    }

    calculateTotal(): number {
        let total = 0;

        this.items.forEach(item => total += item.price * item.amount - item.discount);
        return total;
    }
}

const order = new Order(1, "iPhone");
order.addItem("iPhone 16", 1000, 1, 0);

const newProduct = new Product("sac du phong", 10, 5, 1);
order.addItem2(newProduct);

const orderValue = order.calculateTotal();
console.log(`Total amount: ${orderValue}`);