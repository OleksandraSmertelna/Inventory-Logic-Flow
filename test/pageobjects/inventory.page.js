const BasePage = require('./base.page');

class InventoryPage extends BasePage {

    get title() {
        return $('//span[@class="title"]');
    }

    get sortDropdown() {
        return $('//select[@data-test="product-sort-container"]');
    }

    get cartBadge() {
        return $('//span[@class="shopping_cart_badge"]');
    }

    async isLoaded() {
        await this.title.waitForDisplayed();
    }

    async selectSort(option) {
        await this.sortDropdown.selectByVisibleText(option);
    }

    async getCartBadgeValue() {
        await this.cartBadge.waitForDisplayed();
        return await this.cartBadge.getText();
    }

}

module.exports = new InventoryPage();