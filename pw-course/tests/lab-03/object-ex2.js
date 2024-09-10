// Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.

const person = {
    name: "John",
    address: {
        street: "223 le tan be",
        city: "Ho Chi Minh",
        country: "Vietnam",
    }
}

console.log(person.address.street)