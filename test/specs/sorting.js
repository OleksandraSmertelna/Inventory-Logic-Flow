const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const ProductComponent = require('../components/product.component');
const users = require('../data/users');

describe('Inventory Sorting', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );
        await InventoryPage.isLoaded();
    });

    it('UC-1 - should sort products by price (low to high)', async () => {
        await InventoryPage.selectSort('Price (low to high)');
        const actualPrices = await ProductComponent.getPrices();
        const expectedPrices = [...actualPrices].sort((a, b) => a - b);
        expect(actualPrices).toEqual(expectedPrices);
    });
});