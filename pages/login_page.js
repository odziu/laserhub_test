const emailInput = element(by.xpath(`//input[@id='email']`));
const passwordInput = element(by.xpath(`//input[@id='password']`));
const loginBtn = element(by.xpath(`//form[@class='form']//button[@type='submit']`));

class LoginPage {
    async open() {
        await browser.waitForAngularEnabled(false);
        await browser.get('');
    }

    async loginAsTestUser() {
        await emailInput.sendKeys('e.ioannidis+testing_worktask@laserhub.com');
        await passwordInput.sendKeys('l0vet3sting@');
        await loginBtn.click();
    }
};

module.exports = LoginPage;