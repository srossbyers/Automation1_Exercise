import { expect } from 'chai';
import ManagementPage from 'src/pages/SQA/DesktopManagementPage';
import Helpers from 'src/utilities/Helpers';
import * as CONSTANTS from 'src/constants/CONSTANTS';

before(function () {
    Helpers.resizeWindow();
    browser.url('/about/management-team');
});
describe('Shasta QA ' + (browser.config as any).view + ' management team page', () => {
    it('contains accurate senior management details', () => {
        let elements = ManagementPage.getAllElements();
        for (let i = 0; i < elements.length; i++) {
            Helpers.waitForElementToLoad(elements[i]);
            expect(Helpers.getManagerName(elements[i])).to.be.string(CONSTANTS.MANAGEMENT_PAGE_EXPECTS[i][0]);
            expect(Helpers.getManagerTitle(elements[i])).to.be.string(CONSTANTS.MANAGEMENT_PAGE_EXPECTS[i][1]);
        }
    });
});