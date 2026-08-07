const BasePage = require('../pageobjects/base.page');

class ProductComponent extends BasePage {

    get productPrices() {
        return $$('//div[@class="inventory_item_price"]');
    }

    addButton(productName) {
        const xpath =
            `//div[normalize-space()="${productName}"]/ancestor::div[@class="inventory_item"]//button[text()="Add to cart"]`;
        return $(xpath);
    }

    removeButton(productName) {
        const xpath =
            `//div[normalize-space()="${productName}"]/ancestor::div[@class="inventory_item"]//button[text()="Remove"]`;
        return $(xpath);
    }

    async addProduct(productName) {
        await this.click(this.addButton(productName));
    }

    async removeProduct(productName) {
        await this.click(this.removeButton(productName));
    }

    async getPrices() {
        const prices = [];
        for (const priceElement of await this.productPrices) {
            const priceText = await this.getText(priceElement);
            prices.push(
                Number(priceText.replace('$', ''))
            );
        }
        return prices;
    }

}

module.exports = new ProductComponent();