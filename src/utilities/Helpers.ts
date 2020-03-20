class Helpers {
    highlight(webElement: WebdriverIO.Element, color = 'green') {
        if (!webElement.isDisplayedInViewport()) {
            webElement.scrollIntoView();
        }
        try {
            let originalBorder = webElement.getCSSProperty('border');

            browser.pause(500);
            browser.execute("arguments[0].style.border='3px solid " + color + "'",
                webElement);
            browser.pause(500);

            browser.execute(`arguments[0].style.border='${originalBorder.value}'`,
                webElement);
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
    waitForElementToLoad(element: WebdriverIO.Element, waitTime = 20000, errorMessage = 'ERROR: Element was not displayed') {
        if (!element.isDisplayed()) {
            element.waitForDisplayed(waitTime, false, errorMessage);
        }
    }
    hoverToDisplay(targetElementSelector: string, hoverElementSelector: string) {
        let element: WebdriverIO.Element = $(targetElementSelector);
        if (!element.isDisplayed()) {
            $(hoverElementSelector).moveTo();
            this.waitForElementToLoad(element);
        }
        return element;
    }
    hoverDisplay(targetElement: WebdriverIO.Element, hoverElement: any) {
        if (!targetElement.isDisplayed()) {
            hoverElement.moveTo();
            this.waitForElementToLoad(targetElement);
        }
        return targetElement;
    }
}

export default new Helpers();