class DesktopContactPage {
    UI: DesktopContactPage_UI;
    constructor() {
        this.UI = new DesktopContactPage_UI();
    }
}

class DesktopContactPage_UI {
    Form: ContactForm;
    constructor() {
        this.Form = new ContactForm();
    }
}

class ContactForm {
    allElements: Array<WebdriverIO.Element>;
    Errors: ContactFormErrors;
    constructor() {
        this.allElements = new Array<WebdriverIO.Element>();
        this.Errors = new ContactFormErrors();
    }
    getAllElements() {
        this.allElements = [
            this.firstNameField,
            this.lastNameField,
            this.companyField,
            this.emailField,
            this.phoneAreaCodeField,
            this.phonePrefixField,
            this.phoneSuffixField,
            this.preferredContactRadios,
            this.areasOfInterest,
            this.additionalInformationField,
            this.submitButton
        ]
        return this.allElements;
    }
    get firstNameField() {
        return $('//input[@name="fname"]');
    }
    get lastNameField() {
        return $('//input[@name="lname"]');
    }
    get companyField() {
        return $('//label[contains(text(), "Company")]/following-sibling::input');
    }
    get emailField() {
        return $('//input[@name="email"]');
    }
    get phoneAreaCodeField() {
        return $('//input[@data-title="Areacode"]');
    }
    get phonePrefixField() {
        return $('//input[@data-title="Prefix"]');
    }
    get phoneSuffixField() {
        return $('//input[@data-title="Line"]');
    }
    get preferredContactRadios() {
        return $('//legend[contains(text(), "Preferred Contact Method")]/..');
    }
    get areasOfInterest() {
        return $('//label[contains(text(), "Areas Of Interest")]/following-sibling::select');
    }
    get additionalInformationField() {
        return $('//label[contains(text(), "Please provide any additional information.")]/following-sibling::textarea');
    }
    get submitButton() {
        return $('//input[@value="Submit"]');
    }
}

class ContactFormErrors {
    allElements: Array<WebdriverIO.Element>;
    constructor() {
        this.allElements = new Array<WebdriverIO.Element>();
    }
    getAllElements() {
        this.allElements = [
            
        ]
    }
}
export default new DesktopContactPage();