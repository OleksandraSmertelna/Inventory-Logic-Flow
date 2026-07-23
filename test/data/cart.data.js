const products = require('./products');

module.exports = [
    {
        productsToAdd: [
            products.backpack,
            products.bikeLight
        ],
        productToRemove: products.backpack,
        expectedBadgeAfterAdd: '2',
        expectedBadgeAfterRemove: '1'
    }
];