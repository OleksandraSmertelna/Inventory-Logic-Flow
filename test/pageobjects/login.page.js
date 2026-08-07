const BasePage = require('./base.page');
const InventoryPage = require('./inventory.page');

class LoginPage extends BasePage {

    get usernameInput() {
        return $('//input[@id="user-name"]');
    }

    get passwordInput() {
        return $('//input[@id="password"]');
    }

    get loginButton() {
        return $('//input[@id="login-button"]');
    }

    get errorMessage() {
        return $('//h3[contains(text(),"Epic sadface")]');
    }

    async open() {
        await super.open('/');
    }

    async login(username, password) {
        await this.setValue(this.usernameInput, username);
        await this.setValue(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async loginAsStandardUser(username, password) {
        await this.login(username, password);
        await InventoryPage.waitUntilLoaded();
    }

    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }
}

module.exports = new LoginPage();