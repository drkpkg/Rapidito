
describe('Login case', function () {
    browser.ignoreSynchronization = true;

    var username = 'usertest';
    var password = 'strange!';
    var URL = 'http://127.0.0.1:8000/accounts/login';

    var element_login = by.xpath('//input[@name="login"]');
    var element_password = by.xpath('//input[@name="password"]');
    var element_submit = by.xpath('//button[contains(text(), "Sign In")]');

    it('should try to login and success', function () {
        browser.get(URL);
        element(element_login).sendKeys(username);
        element(element_password).sendKeys(password);
        element(element_submit).click();
        //browser.sleep(2000);
        //expect(element(element_message_fail).isPresent()).toBe(true);
    });
});
