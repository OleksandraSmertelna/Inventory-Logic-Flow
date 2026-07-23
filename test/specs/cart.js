const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const ProductComponent = require('../components/product.component');

const users = require('../data/users');
const cartData = require('../data/cart.data');

describe('Cart State Logic', () => {
    
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );
        await InventoryPage.isLoaded();
    });

    cartData.forEach((data) => {

        it('UC-2 - should update cart badge after removing a product', async () => {
            for (const product of data.productsToAdd) {
                await ProductComponent.addProduct(product);
            }
            expect(
                await InventoryPage.getCartBadgeValue()
            ).toBe(data.expectedBadgeAfterAdd);
            await ProductComponent.removeProduct(
                data.productToRemove
            );
            expect(
                await InventoryPage.getCartBadgeValue()
            ).toBe(data.expectedBadgeAfterRemove);
        });
    });
});