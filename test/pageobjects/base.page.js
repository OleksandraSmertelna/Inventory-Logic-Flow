class BasePage {

    async open(path) {
        await browser.url(path);
    }


    async click(element) {
        await element.waitForClickable();
        await element.click();
    }


    async setValue(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value);
    }


    async getText(element) {
        await element.waitForDisplayed();
        return await element.getText();
    }

}

module.exports = BasePage;

