import Helpers from "src/utilities/Helpers";

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
    ValidationErrors: ContactFormErrors;
    constructor() {
        this.allElements = new Array<WebdriverIO.Element>();
        this.ValidationErrors = new ContactFormErrors();
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
            this.emailRadio,
            this.phoneRadio,
            this.areasOfInterest,
            this.additionalInformationField,
            this.submitButton
        ]
        return this.allElements;
    }
    getAllTestableElements() {
        this.allElements = [
            this.firstNameField,
            this.lastNameField,
            this.companyField,
            this.emailField,
            this.phoneAreaCodeField,
            this.phonePrefixField,
            this.phoneSuffixField,
            this.emailRadio,
            this.phoneRadio,
            this.additionalInformationField,
        ]
        return this.allElements;
    }
    fillOut(fname = 'Steve',
        lname = 'Ross-Byers',
        company = 'ShastaQA',
        emailAddress = 'srossbyers@shastaqa.com',
        phoneAreaCode = '123',
        phonePrefix = '456',
        phoneSuffix = '7890',
        preferredContact = 'Email',
        additional = 'none') {
        this.firstNameField.setValue(fname);
        this.lastNameField.setValue(lname);
        this.companyField.setValue(company);
        this.emailField.setValue(emailAddress);
        this.phoneAreaCodeField.setValue(phoneAreaCode);
        this.phonePrefixField.setValue(phonePrefix);
        this.phoneSuffixField.setValue(phoneSuffix);
        if (preferredContact == 'Phone') {
            Helpers.tryClick(this.phoneRadio);
        }
        else if (preferredContact == 'Email') {
            Helpers.tryClick(this.emailRadio);
        }
        this.additionalInformationField.setValue(additional);
    }
    clearField(element: WebdriverIO.Element) {
        if (Helpers.valueCanBeModified(element)) {
            element.clearValue;
        }
    }
    clearAll() {
        this.getAllElements().forEach(function (element) {
            if (Helpers.valueCanBeModified(element)) {
                element.clearValue();
            }
        });
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
    get emailRadio() {
        return $('//input[@value="Email"]/..');
    }
    get phoneRadio() {
        return $('//input[@value="Phone"]/..');
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
            this.top,
            this.bottom,
        ]
    }
    get top() {
        return $('//div[@class="field-error" and contains(text(), "down")]');
    }
    get bottom() {
        return $('//div[@class="field-error" and contains(text(), "up")]');
    }
}
export default new DesktopContactPage();