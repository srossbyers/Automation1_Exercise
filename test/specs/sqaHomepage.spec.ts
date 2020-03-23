import {expect} from 'chai';
import Homepage from 'src/pages/SQA/DesktopHomepage';
import Helpers from 'src/utilities/Helpers';
import * as CONSTANTS from 'src/constants/CONSTANTS';

before(function () {
    Helpers.resizeWindow();
    browser.url('');
});
describe('Shasta QA ' + (browser.config as any).view + ' homepage', () => {
    it('loads successfully', () => {
        expect(Homepage.UI.Header.sqaLogo.isDisplayed()).to.be.true;
    });
    it('header links open the expected pages', () => {
        let elements = Homepage.UI.Header.getAllElements();
        for (let i = 0; i < elements.length; i++) {
            Helpers.tryClick(elements[i]);
            expect(browser.getUrl()).to.be.string(CONSTANTS.HEADER_LINK_EXPECTS[i]);
        }
    });
    it('nav bar links open the expected pages', () => {
        let elements = Homepage.UI.NavBar.getAllElements();
        for (let i = 0; i < elements.length; i++) {
            Helpers.tryClick(elements[i]);
            expect(browser.getUrl()).to.be.string(CONSTANTS.NAVBAR_LINK_EXPECTS[i]);
        }
    });
    // with a little more time these would have been simple loops as well
    // just need to move the 'hover' action out of the getters for these elements
    it('Testing Services dropdown links open the expected pages', () => {
        Helpers.tryClick(Homepage.UI.NavBar.TestingServices.desktopApplicationTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/desktop-application-testing');

        Helpers.tryClick(Homepage.UI.NavBar.TestingServices.webApplicationTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/web-application-testing');

        Helpers.tryClick(Homepage.UI.NavBar.TestingServices.mobileTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/mobile-qa-testing');

        Helpers.tryClick(Homepage.UI.NavBar.TestingServices.iotTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/iot-testing');

        Helpers.tryClick(Homepage.UI.NavBar.TestingServices.automationTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/automation-testing');

        Helpers.tryClick(Homepage.UI.NavBar.TestingServices.regulatoryTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/regulatory-testing');

        Helpers.tryClick(Homepage.UI.NavBar.TestingServices.bugScrubbingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/bugscrubbing');
    });
    it('Markets dropdown links open the expected pages', () => {
        Helpers.tryClick(Homepage.UI.NavBar.Markets.marketsLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/market');

        Helpers.tryClick(Homepage.UI.NavBar.Markets.techStartupsLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/markets/tech-startups');

        Helpers.tryClick(Homepage.UI.NavBar.Markets.regulatoryMedicalDevicesLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/markets/regulatory-medical-device-industries');

        Helpers.tryClick(Homepage.UI.NavBar.Markets.ventureCapitalistsLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/markets/venture-capitalists');
    });
    it('Shasta QA Process dropdown links open the expected pages', () => {
        Helpers.tryClick(Homepage.UI.NavBar.SQAProcess.needsAnalysisLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/shasta-qa-process/needs-analysis');

        Helpers.tryClick(Homepage.UI.NavBar.SQAProcess.projectPlanningLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/shasta-qa-process/project-planning');

        Helpers.tryClick(Homepage.UI.NavBar.SQAProcess.projectExecutionLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/shasta-qa-process/project-execution');

        Helpers.tryClick(Homepage.UI.NavBar.SQAProcess.projectMasteryLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/shasta-qa-process/project-mastery');
    });
    it('About dropdown links open the expected pages', () => {
        Helpers.tryClick(Homepage.UI.NavBar.About.whoWeAreLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/who-we-are');

        Helpers.tryClick(Homepage.UI.NavBar.About.ourSourcingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/about/our-values');

        Helpers.tryClick(Homepage.UI.NavBar.About.teamLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/about/management-team');

        Helpers.tryClick(Homepage.UI.NavBar.About.careersLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/about/careers');
    });
});