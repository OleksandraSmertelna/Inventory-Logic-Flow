const BasePage = require('./base.page');

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
        return $('[data-test="error"]'); 
    }

    async open() {
        await super.open('/');
    }

    async login(username, password) {
        await this.usernameInput.waitForDisplayed();
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();