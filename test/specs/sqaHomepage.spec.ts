import {expect} from 'chai';
import DesktopHomepage from 'src/pages/SQA/DesktopHomepage';
import Helpers from 'src/utilities/Helpers';
import * as CONSTANTS from 'src/constants/CONSTANTS';

before(function () {
    Helpers.resizeWindow();
    browser.url('');
});
describe('Shasta QA ' + (browser.config as any).view + ' homepage', () => {
    it('loads successfully', () => {
        expect(DesktopHomepage.UI.Header.sqaLogo.isDisplayed()).to.be.true;
    });
    it('header links open the expected pages', () => {
        let elements = DesktopHomepage.UI.Header.getAllElements();
        for (let i = 0; i < elements.length; i++) {
            Helpers.tryClick(elements[i]);
            expect(browser.getUrl()).to.be.string(CONSTANTS.HEADER_LINK_EXPECTS[i]);
        }
    });
    it('nav bar links open the expected pages', () => {
        let elements = DesktopHomepage.UI.NavBar.getAllElements();
        for (let i = 0; i < elements.length; i++) {
            Helpers.tryClick(elements[i]);
            expect(browser.getUrl()).to.be.string(CONSTANTS.NAVBAR_LINK_EXPECTS[i]);
        }
    });
    it('Testing Services dropdown links open the expected pages', () => {
        Helpers.tryClick(DesktopHomepage.UI.NavBar.TestingServices.desktopApplicationTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/desktop-application-testing');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.TestingServices.webApplicationTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/web-application-testing');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.TestingServices.mobileTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/mobile-qa-testing');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.TestingServices.iotTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/iot-testing');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.TestingServices.automationTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/automation-testing');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.TestingServices.regulatoryTestingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/testing-services/regulatory-testing');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.TestingServices.bugScrubbingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/bugscrubbing');
    });
    it('Markets dropdown links open the expected pages', () => {
        Helpers.tryClick(DesktopHomepage.UI.NavBar.Markets.marketsLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/market');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.Markets.techStartupsLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/markets/tech-startups');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.Markets.regulatoryMedicalDevicesLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/markets/regulatory-medical-device-industries');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.Markets.ventureCapitalistsLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/markets/venture-capitalists');
    });
    it('Shasta QA Process dropdown links open the expected pages', () => {
        Helpers.tryClick(DesktopHomepage.UI.NavBar.SQAProcess.needsAnalysisLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/shasta-qa-process/needs-analysis');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.SQAProcess.projectPlanningLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/shasta-qa-process/project-planning');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.SQAProcess.projectExecutionLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/shasta-qa-process/project-execution');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.SQAProcess.projectMasteryLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/shasta-qa-process/project-mastery');
    });
    it('About dropdown links open the expected pages', () => {
        Helpers.tryClick(DesktopHomepage.UI.NavBar.About.whoWeAreLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/who-we-are');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.About.ourSourcingLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/about/our-values');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.About.teamLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/about/management-team');

        Helpers.tryClick(DesktopHomepage.UI.NavBar.About.careersLink);
        expect(browser.getUrl()).to.be.string('https://www.shastaqa.com/about/careers');
    });
});