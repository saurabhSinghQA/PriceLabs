/**
 * BasePage class contains common methods for interacting with web elements
 * other page classes can extend or use this class to perform common operations
 */

class BasePage {

    /**
        * Clicks on the provided web element.
        * @param {Cypress.Chainable<JQuery<HTMLElement>>} element - The web element to click on.
        */
    clickOnWebElement(element) {
        element.click()
    }

    /**
        * Clicks on the provided web element using force bypassing any visibility conditions
        * @param {Cypress.Chainable<JQuery<HTMLElement>>} element - The web element to click on.
        */
    clickOnWebElement_Force(element) {
        element.click({force:true})
    }

    /**
        * fill something on the provided web element.
        * @param {Cypress.Chainable<JQuery<HTMLElement>>} element - Text box web element.
        * @param {String} textToBeFilled -the text to be filled into the text box
        */
    fillTextBox(element, text) {
        element.type(text)
    }


}

export default new BasePage