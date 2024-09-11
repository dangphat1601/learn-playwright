// Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.

const product = {
    Apple: 50.000,
    Banana: 30.000,
    Orange: 45.000,
    Mango: 60.000,
};

for (const productName in product){
    console.log(`Product: ${productName}, Price: $${product[productName]}`);
}
