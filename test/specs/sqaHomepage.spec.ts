import {expect} from 'chai';
import Homepage from 'src/pages/SQA/Homepage';
import Helpers from 'src/utilities/Helpers';

describe('Shasta QA ' + (browser.config as any).view + ' homepage', () => {
    it('loads successfully', () => {
        Helpers.resizeWindow();
        browser.url('');
        expect(Homepage.sqaLogo.isDisplayed()).to.be.true;
    });
});