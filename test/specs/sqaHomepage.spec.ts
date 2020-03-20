import {expect} from 'chai';
import DesktopHomepage from 'src/pages/SQA/DesktopHomepage';
import Helpers from 'src/utilities/Helpers';

describe('Shasta QA ' + (browser.config as any).view + ' homepage', () => {
    it('loads successfully', () => {
        Helpers.resizeWindow();
        browser.url('');
        expect(DesktopHomepage.UI.Header.sqaLogo.isDisplayed()).to.be.true;
    });
});