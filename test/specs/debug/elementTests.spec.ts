import { expect } from 'chai';
import DesktopHomepage from 'src/pages/SQA/DesktopHomepage';
import DesktopContactPage from 'src/pages/SQA/DesktopContactpage';
import DesktopManagementPage from 'src/pages/SQA/DesktopManagementpage';
import Helpers from 'src/utilities/Helpers';

describe('All mapped ' + (browser.config as any).view + 'Homepage elements', () => {
    it('can be successfully highlighted', () => {
        Helpers.resizeWindow();
        browser.url('');

        console.log("Highlighting all Header Elements");
        DesktopHomepage.UI.Header.getAllElements().forEach(function (element) {
            Helpers.highlight(element, 'yellow');
        });

        console.log("Highlighting all NavBar Elements");
        DesktopHomepage.UI.NavBar.getAllElements().forEach(function (element) {
            Helpers.highlight(element, 'blue');
        });

        console.log("Highlighting all Homepage Elements");
        DesktopHomepage.UI.getAllElements().forEach(function (element) {
            Helpers.highlight(element);
        });

        console.log("Highlighting all NavBar Hover Dropdown Elements");
        Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.desktopApplicationTestingLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.webApplicationTestingLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.mobileTestingLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.iotTestingLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.automationTestingLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.regulatoryTestingLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.bugScrubbingLink);

        Helpers.highlight(DesktopHomepage.UI.NavBar.Markets.marketsLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.Markets.techStartupsLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.Markets.regulatoryMedicalDevicesLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.Markets.ventureCapitalistsLink);

        Helpers.highlight(DesktopHomepage.UI.NavBar.SQAProcess.needsAnalysisLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.SQAProcess.projectPlanningLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.SQAProcess.projectExecutionLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.SQAProcess.projectMasteryLink);

        Helpers.highlight(DesktopHomepage.UI.NavBar.About.whoWeAreLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.About.ourSourcingLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.About.teamLink);
        Helpers.highlight(DesktopHomepage.UI.NavBar.About.careersLink);
    });
});
describe('All mapped ' + (browser.config as any).view + 'Contact page elements', () => {
    it('can be successfully highlighted', () => {
        browser.url('/contact');
        console.log("Highlighting all Contact Page Elements");
        DesktopContactPage.UI.Form.getAllElements().forEach(function (element) {
            Helpers.highlight(element);
        });
    });
});
describe('All mapped ' + (browser.config as any).view + 'Management page elements', () => {
    it('can be successfully highlighted', () => {
        browser.url('/about/management-team');
        console.log("Highlighting all Management Page Elements");
        DesktopManagementPage.getAllElements().forEach(function (element) {
            Helpers.highlight(element);
        });
    });
    it('can output details for all senior management', () => {
        console.log(Helpers.getManagerStrings(DesktopManagementPage.donSection));
        console.log(Helpers.getManagerStrings(DesktopManagementPage.chrisSection));
        console.log(Helpers.getManagerStrings(DesktopManagementPage.annaSection));
        console.log(Helpers.getManagerStrings(DesktopManagementPage.christinaSection));
        console.log(Helpers.getManagerStrings(DesktopManagementPage.bentonSection));
        console.log(Helpers.getManagerStrings(DesktopManagementPage.jimSection));
        console.log(Helpers.getManagerStrings(DesktopManagementPage.longmireSection));
        console.log(Helpers.getManagerStrings(DesktopManagementPage.yukaSection));
    });
});