const acceptAllCookiesBtn = element(by.id('onetrust-accept-btn-handler'));
const hiddenBanner = element(by.xpath(`//div[@class="onetrust-pc-dark-filter ot-hide ot-fade-in"]`));

module.exports = {
    async confirmAllCookies2() {
        await browser.switchTo().frame(element(by.id('onetrust-banner-sdk')).getWebElement());
        await acceptAllCookiesBtn.click();
        await browser.switchTo().defaultContent();
    },

    async confirmAllCookies() {
        await acceptAllCookiesBtn.click();
        await browser.wait(async () =>
            await hiddenBanner.isPresent(),
            10 * 1000, `The cookie acceptance banner is still present.`
        );
    },
};