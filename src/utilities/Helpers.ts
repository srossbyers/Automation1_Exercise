class Helpers {
    highlight(element: WebdriverIO.Element, color = 'green') {
        if (!element.isDisplayedInViewport()) {
            element.scrollIntoView();
        }
        try {
            let originalBorder = element.getCSSProperty('border');

            browser.pause(500);
            browser.execute("arguments[0].style.border='3px solid " + color + "'",
                element);
            browser.pause(500);

            browser.execute(`arguments[0].style.border='${originalBorder.value}'`,
                element);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    resizeWindow() {
        switch ((browser.config as any).view) {
            case 'mobile':
                browser.setWindowSize(799, browser.getWindowSize().height);
                break;
            case 'tablet':
                browser.setWindowSize(1025, browser.getWindowSize().height);
                break;
            default:
                browser.maximizeWindow();
                break;
        }

    }
    callbackByView(view: string, desktop, mobile) {
        if (view == "mobile") {
            mobile();
        }
        else {
            desktop();
        }
    }
    waitForElementToLoad(element: WebdriverIO.Element, waitTime = 20000, 
                         errorMessage = 'ERROR: Element was not displayed') {
        if (!element.isDisplayed()) {
            element.waitForDisplayed(waitTime, false, errorMessage);
        }
    }
    hoverToDisplay(targetElementSelector: string, hoverElementSelector: string) {
        let element: WebdriverIO.Element = $(targetElementSelector);
        let hover: WebdriverIO.Element = $(hoverElementSelector);
        if (!element.isDisplayed()) {
            this.waitForElementToLoad(hover);
            if (!hover.isDisplayedInViewport()) {
                hover.scrollIntoView();
            }
            hover.moveTo();
            this.waitForElementToLoad(element);
        }
        return element;
    }
    tryClick(target: WebdriverIO.Element) {
        this.waitForElementToLoad(target);
        if (!target.isDisplayedInViewport()) {
            target.scrollIntoView();
        }
        target.click();
    }
    getManagerStrings(element: WebdriverIO.Element) {
        return $(element.selector).getText().split("\n");
    }
    getManagerName(element: WebdriverIO.Element) {
        return this.getManagerStrings(element)[0];
    }
    getManagerTitle(element: WebdriverIO.Element) {
        return this.getManagerStrings(element)[1];
    }
    valueCanBeModified(element: WebdriverIO.Element) {
        if ((element.getTagName() == 'input' || element.getTagName() == 'textarea')
            // don't try to modify the value of Sumbmit Button    
            && element.getValue() != 'Submit'
            // don't try to modify the value of Phone radio button
            && element.getValue() != 'Phone'
            // don't try to modify the value of Email radio button    
            && element.getValue() != 'Email') { 
            return true;
        }
        return false;
    }
}
export default new Helpers();