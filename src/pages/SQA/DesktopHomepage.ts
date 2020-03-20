import Helpers from "src/utilities/Helpers";

class DesktopHomepage {
    UI: DesktopHomepage_UI;
    constructor() {
        this.UI = new DesktopHomepage_UI();
    }
}

class DesktopHomepage_UI {
    private allElements: Array<WebdriverIO.Element>
    Header: HomepageHeader;
    NavBar: HomepageNavBar;
    constructor() {
        this.allElements = new Array<WebdriverIO.Element>();
        this.Header = new HomepageHeader();
        this.NavBar = new HomepageNavBar();
    }
    getAllElements() {
        this.allElements = this.Header.getAllElements()
                   .concat(this.NavBar.getAllElements())
        return this.allElements;
    }
}

class HomepageHeader {
    private allElements: Array<WebdriverIO.Element>
    private elementGetters: Array<() => WebdriverIO.Element>;
    constructor() {
        this.allElements = new Array<WebdriverIO.Element>();
        this.elementGetters = new Array<() => WebdriverIO.Element>();
    }
    getAllElements() {
        this.allElements = [
            this.sqaLogo,
            this.knowledgeCenterLink,
            this.socialMediaLink,
            this.faqLink,
            this.contactLink,
            this.consultationLink,
        ]
        return this.allElements;
    }
    get sqaLogo() {
        return $('//img[@class="Header-branding-logo"]');
    }
    get consultationLink() {
        return $('//a[@class="first-button__text"]');
    }
    get knowledgeCenterLink() {
        return $('//a[contains(text(), "Knowledge Center")]');
    }
    get socialMediaLink() {
        return $('//a[contains(text(), "Social Media")]');
    }
    get faqLink() {
        return $('//a[contains(text(), "FAQ")]');
    }
    get contactLink() {
        return $('//a[contains(text(), "Contact")]');
    }
}

class HomepageNavBar {
    private allElements: Array<WebdriverIO.Element>
    TestingServices: TestingServiceLinks;
    Markets: MarketLinks;
    SQAProcess: SQAProcessLinks;
    About: AboutLinks;
    constructor() {
        this.allElements = new Array<WebdriverIO.Element>();
        this.TestingServices = new TestingServiceLinks();
        this.Markets = new MarketLinks();
        this.SQAProcess = new SQAProcessLinks();
        this.About = new AboutLinks();
    }
    getAllElements() {
        this.allElements = [
            this.testingServicesLink,
            this.marketsLink,
            this.sqaProcessLink,
            this.caseStudiesLink,
            this.aboutLink,
            this.searchLink,
        ]
        return this.allElements;
    }
    get testingServicesLink() {
        return $('//a[contains(text(), "Testing Services")]');
    }
    get marketsLink() {
        return $('//a[@class="Header-nav-folder-title" and contains(text(), "Markets")]');
    }
    get sqaProcessLink() {
        return $('//a[contains(text(), "Shasta QA Process")]');
    }
    get caseStudiesLink() {
        return $('//a[@class="Header-nav-item" and contains(text(), "Case Studies")]');
    }
    get aboutLink() {
        return $('//a[contains(text(), "About")]');
    }
    get searchLink() {
        return $('//*[name()="svg" and @class="Icon Icon--search--small"]');
    }
}

class TestingServiceLinks {
    hoverElementSelector: string = '//a[contains(text(), "Testing Services")]';
    get desktopApplicationTestingLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Desktop Application Testing")]',
            this.hoverElementSelector);
    }
    get webApplicationTestingLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Web Application Testing")]',
            this.hoverElementSelector);
    }
    get mobileTestingLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Mobile Testing")]',
            this.hoverElementSelector);
    }
    get iotTestingLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "IoT Testing")]',
            this.hoverElementSelector);
    }
    get automationTestingLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Automation Testing")]',
            this.hoverElementSelector);
    }
    get regulatoryTestingLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Regulatory Testing")]',
            this.hoverElementSelector);
    }
    get bugScrubbingLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Bug Scrubbing")]',
            this.hoverElementSelector);
    }
}

class MarketLinks {
    hoverElementSelector: string = '//a[@class="Header-nav-folder-title" and contains(text(), "Markets")]';
    get marketsLinkNested() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Markets")]',
            this.hoverElementSelector);
    }
    get techStartupsLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Tech Startups")]',
            this.hoverElementSelector);
    }
    get regulatoryMedicalDevicesLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Regulatory/Medical Devices")]',
            this.hoverElementSelector);
    }
    get ventureCapitalistsLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Venture Capitalists")]',
            this.hoverElementSelector);
    }
}

class SQAProcessLinks {
    hoverElementSelector: string = '//a[contains(text(), "Shasta QA Process")]';
    get needsAnalysisLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Needs Analysis")]',
            this.hoverElementSelector);
    }
    get projectPlanningLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Project Planning")]',
            this.hoverElementSelector);
    }
    get projectExecutionLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Project Execution")]',
            this.hoverElementSelector);
    }
    get projectMasteryLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Project Mastery")]',
            this.hoverElementSelector);
    }
}

class AboutLinks {
    hoverElementSelector: string = '//a[contains(text(), "About")]';
    get whoWeAreLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Who We Are")]',
            this.hoverElementSelector);
    }
    get ourSourcingLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "OurSourcing")]',
            this.hoverElementSelector);
    }
    get teamLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Team")]',
            this.hoverElementSelector);
    }
    get careersLink() {
        return Helpers.hoverToDisplay(
            '//a[@class="Header-nav-folder-item" and contains(text(), "Careers")]',
            this.hoverElementSelector);
    }
}
export default new DesktopHomepage();