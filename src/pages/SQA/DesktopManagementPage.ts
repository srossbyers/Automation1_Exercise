class DesktopManagementPage {
    allElements: Array<WebdriverIO.Element>;
    constructor() {
        this.allElements = new Array<WebdriverIO.Element>();
    }
    getAllElements() {
        this.allElements = [
            this.donSection,
            this.chrisSection,
            this.annaSection,
            this.christinaSection,
            this.bentonSection,
            this.jimSection,
            this.longmireSection,
            this.yukaSection
        ]
        return this.allElements;
    }
    get donSection() {
        return $('//strong[contains(text(), "Don O‘Connell")]/..');
    }
    get chrisSection() {
        return $('//strong[contains(text(), "Chris Milnes")]/..');
    }
    get annaSection() {
        return $('//strong[contains(text(), "Anna Henderson")]/..');
    }
    get christinaSection() {
        return $('//strong[contains(text(), "Christina Young")]/..');
    }
    get bentonSection() {
        return $('//strong[contains(text(), "Mike Benton")]/..');
    }
    get jimSection() {
        return $('//strong[contains(text(), "Jim Edelen")]/..');
    }
    get longmireSection() {
        return $('//strong[contains(text(), "Mike Longmire")]/..');
    }
    get yukaSection() {
        return $('//strong[contains(text(), "Yuka Ando")]/..');
    }
}
export default new DesktopManagementPage();