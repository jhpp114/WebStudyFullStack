let faker = require('faker');

function printProductNameAndPrice(nums) {
    for (let i = 0; i < nums; i++) {
        console.log(`${faker.commerce.productName()}\n${faker.commerce.price()}`)
    }
}

printProductNameAndPrice(10);