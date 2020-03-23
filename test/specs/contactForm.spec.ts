import { expect } from 'chai';
import ContactPage from 'src/pages/SQA/DesktopContactPage';
import Helpers from 'src/utilities/Helpers';
import * as CONSTANTS from 'src/constants/CONSTANTS';

before(function () {
    Helpers.resizeWindow();
    browser.url('/contact');
});
describe('Shasta QA ' + (browser.config as any).view + ' contact form', () => {
    it('required input fields are required', () => {
        for (let i = 0; i < CONSTANTS.CONTACT_FORM_VALUES[0].length; i++) {
            ContactPage.UI.Form.fillOut(...CONSTANTS.CONTACT_FORM_VALUES[i]);
            Helpers.tryClick(ContactPage.UI.Form.submitButton);
            Helpers.waitForElementToLoad(ContactPage.UI.Form.ValidationErrors.top);
            expect(ContactPage.UI.Form.ValidationErrors.top.isDisplayed()).to.be.true;
            expect(ContactPage.UI.Form.ValidationErrors.bottom.isDisplayed()).to.be.true;
            ContactPage.UI.Form.clearAll();
        }
    });
});