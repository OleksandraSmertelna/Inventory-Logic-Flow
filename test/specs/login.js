const LoginPage = require('../pageobjects/login.page');
const users = require('../data/users');

describe('Login functionality', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await browser.execute(() => window.localStorage.clear());
        await LoginPage.open();
    });

    it('UC-3 - should show an error for invalid credentials', async () => {
        await LoginPage.login(
            users.invalidUser.username,
            users.invalidUser.password
        );
        await expect(LoginPage.errorMessage).toHaveText(
            expect.stringContaining(
                'Username and password do not match'
            )
        );
    });

    it('UC-4 - should show an error for a locked user', async () => {

        await LoginPage.login(
            users.lockedUser.username,
            users.lockedUser.password
        );
        await expect(LoginPage.errorMessage).toHaveText(
            expect.stringContaining(
                'Sorry, this user has been locked out.'
            )
        );
    });
});