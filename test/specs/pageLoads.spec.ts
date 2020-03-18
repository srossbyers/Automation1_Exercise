import {expect} from 'chai';
import Homepage from 'src/pages/SQA/Homepage';
//import request from 'sync-request';

describe('Shasta QA homepage', () => {
    it('loads successfully', () => {
        browser.url('');
        expect(Homepage.sqaLogo.isDisplayed()).to.be.true;
    });
});