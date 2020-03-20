import { expect } from 'chai';
import DesktopHomepage from 'src/pages/SQA/DesktopHomepage';
import DesktopContactPage from 'src/pages/SQA/DesktopContactpage';
import Helpers from 'src/utilities/Helpers';

describe('All mapped ' + (browser.config as any).view + ' elements', () => {
    it('can be successfully highlighted', () => {
        Helpers.resizeWindow();
        browser.url('/contact');

        // console.log("Highlighting all Header Elements");
        // DesktopHomepage.UI.Header.getAllElements().forEach(function(element) {
        //     Helpers.highlight(element, 'yellow');
        // });

        // console.log("Highlighting all NavBar Elements");
        // DesktopHomepage.UI.NavBar.getAllElements().forEach(function(element) {
        //     Helpers.highlight(element, 'blue');
        // });

        // console.log("Highlighting all Homepage Elements");
        // DesktopHomepage.UI.getAllElements().forEach(function(element) {
        //     Helpers.highlight(element);
        // });

        //DesktopHomepage.UI.NavBar.testingServicesLink.moveTo();
        // console.log("Highlighting all NavBar Hover Dropdown Elements");
        // Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.desktopApplicationTestingLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.webApplicationTestingLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.mobileTestingLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.iotTestingLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.automationTestingLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.regulatoryTestingLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.TestingServices.bugScrubbingLink);

        // Helpers.highlight(DesktopHomepage.UI.NavBar.Markets.marketsLinkNested);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.Markets.techStartupsLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.Markets.regulatoryMedicalDevicesLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.Markets.ventureCapitalistsLink);

        // Helpers.highlight(DesktopHomepage.UI.NavBar.SQAProcess.needsAnalysisLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.SQAProcess.projectPlanningLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.SQAProcess.projectExecutionLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.SQAProcess.projectMasteryLink);

        // Helpers.highlight(DesktopHomepage.UI.NavBar.About.whoWeAreLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.About.ourSourcingLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.About.teamLink);
        // Helpers.highlight(DesktopHomepage.UI.NavBar.About.careersLink);

        console.log("Highlighting all Contact Page Elements");
        DesktopContactPage.UI.Form.getAllElements().forEach(function(element) {
            Helpers.highlight(element);
        });
    });
});