class ProductComponent {

    get inventoryItems() {
        return $$('//div[@class="inventory_item"]');
    }

    get productPrices() {
        return $$('//div[@class="inventory_item_price"]');
    }

    addButton(productName) {
        return $(
            `//div[text()="${productName}"]
            /ancestor::div[@class="inventory_item"]
            //button[text()="Add to cart"]`
        );
    }

    removeButton(productName) {
        return $(
            `//div[text()="${productName}"]
            /ancestor::div[@class="inventory_item"]
            //button[text()="Remove"]`
        );
    }

    async addProduct(productName) {
        await this.addButton(productName).click();
    }

    async removeProduct(productName) {
        await this.removeButton(productName).click();
    }

    async getPrices() {
        const prices = [];
        for (const priceElement of await this.productPrices) {
            const priceText = await priceElement.getText();
            prices.push(
                Number(priceText.replace('$', ''))
            );
        }
        return prices;
    }

}

module.exports = new ProductComponent();