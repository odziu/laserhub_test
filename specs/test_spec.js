const LoginPage = require('../pages/login_page.js');
const loginPage = new LoginPage();
const alertHelp = require('../helpers/alerts_helpers.js');


describe(`Laserhub's Login tests`, () => {
    const accountBtn = element(by.xpath(`//button[@data-label="nav-item-account"]`));
    const newCalculationBtn = element(by.xpath(`//div[@class='menu-item menu-item--button']/a[@href='/product']`));
    const emptyStateBlockHeader = element(by.xpath(`//main//div[@data-label="empty-state-block"]/h2`));

    async function waitForProductPageToLoad() {
        await browser.wait(async () =>
            await emptyStateBlockHeader.isPresent() && await emptyStateBlockHeader.isDisplayed(),
            10 * 1000, `Cannot find New Calculation button. Product page is not loaded.`
        );
    };

    it(`Test verifies that user can login into the Laserhub's account`, async () => {
        await loginPage.open();
        await alertHelp.confirmAllCookies();
        await loginPage.loginAsTestUser();
        await waitForProductPageToLoad();
        expect(await accountBtn.isPresent()).toBe(true);
        expect(await newCalculationBtn.isPresent()).toBe(true);
        expect(await emptyStateBlockHeader.getText()).toContain('Calculate your metal parts');
    });
})