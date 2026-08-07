const BasePage = require('./base.page');

class InventoryPage extends BasePage {

    get title() {
        return $('//span[@class="title"]'); //return $('//span[text()="Products"]');
    }

    get sortDropdown() {
        return $('//select[@data-test="product-sort-container"]');
    }

    get cartBadge() {
        return $('//span[@class="shopping_cart_badge"]');
    }

    async waitUntilLoaded() {
        await this.title.waitForDisplayed();
    }

    async selectSort(option) {
        await this.sortDropdown.selectByVisibleText(option);
    }

    async getCartBadgeValue() {
        return await this.getText(this.cartBadge);
    }
}

module.exports = new InventoryPage();