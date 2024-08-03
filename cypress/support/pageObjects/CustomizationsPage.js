import basePage from "../pageObjects/BasePage"

/**
 * Represents the customizations page of PriceLabs application
 * This class encapsulates methos and elements specific to customizations functionality.
 */

class CustomizationPage {

    //elements on Cuztomizations page
    elements = {

        editAccountBtn: () => cy.get('a[qa-id=account-customizations-edit-dummypms]'),
        allowCheckInDropdown: () => cy.get('button[data-id=check-in-select]'),
        allowCheckOutDropdown: () => cy.get('button[data-id=check-out-select]'),
        allowCheckInDropdownThirdCheckbox: () => cy.get('a[id=bs-select-4-2]>span[class*=ok]'),
        allowCheckInDropdownSecondCheckbox: () => cy.get('a[id=bs-select-4-1]>span[class*=ok]'),
        allowCheckOutDropdownThirdCheckbox: () => cy.get('a[id=bs-select-5-2]>span[class*=ok]'),
        allowCheckOutDropdownSecondCheckbox: () => cy.get('a[id=bs-select-5-1]>span[class*=ok]'),
        dialogBox: () => cy.get('div[class*=non-iframe-customization]'),
        saveChangesBtn: () => cy.get('button[qa-id=listing-customization-save-changes]'),
        toastMsg: () => cy.get('div.toast-message>h4'),
        moreOptionForAccount: () => cy.get('a[qa-id=account-more-options]'),
        refreshListingOptn: () => cy.get('li>a[qa-id=refresh-listings-in-account-dummypms]'),
        editGroupBtn: () => cy.get('a[qa-id*=group-customization]'),
        minmStayToggleBtn: () => cy.get('input[name=cust-min-stay-update-checkbox]'),
        groupTabBtn: () => cy.get('a[id=groups-tab]'),
        createGrpBtn: () => cy.get('a[qa-id=create-new-group-cust]'),
        dialogBoxForCreateGrp: () => cy.get('[id=modal_create_group]>div>div[class=modal-content]'),
        createBtnUnderCreateGrpDialog: () => cy.get('[qa-id=create-group-btn]'),
        createGrpInputBoxUnderCreateGrpDialog: () => cy.get('[qa-id=customization-group-name-value]'),
        
        //parameterised locators
        createdGrpNameBtn: (grpName) => cy.get('button[qa-id*="'+grpName+'"]'),
        createdGrpNameMoreOption: (grpName) => cy.get('a[qa-id*=group-customization][data-group-name="'+grpName+'"]+span+div>a'),
        createdGrpNameDeleteOptnUnderMoreOption: (grpName) => cy.get('li>[data-group-name="'+grpName+'"][qa-id*=delete]'),

        dialogBoxForDeletGroup: () => cy.get('[id=delete-group-customization-modal]>div>div[class=modal-content]'),
        deleteBtnUnderDeleteGrpDialog: () => cy.get('button[qa-id=delete-group-cust-delete]'),
    }
    



    //operations :::


    /**
   * 
   * click edit account button 
   */

    clickEditBtn() {
        basePage.clickOnWebElement(this.elements.editAccountBtn())
    }

    /**
   * 
   * click allow check-in dropdown button 
   */

    clickAllowCheckInDrpDwn() {
        basePage.clickOnWebElement(this.elements.allowCheckInDropdown())
    }


    /**
   * 
   * click  third option in allow check-in dropdown button 
   */

    clickAllowCheckInDrpDwnThirdOptn() {
        basePage.clickOnWebElement(this.elements.allowCheckInDropdownThirdCheckbox())
    }

    /**
    * 
    * click  second option in allow check-in dropdown button 
    */

    clickAllowCheckInDrpDwnSecondOptn() {
        basePage.clickOnWebElement(this.elements.allowCheckInDropdownSecondCheckbox())
    }

    /**
   * 
   * click allow check-out dropdown button 
   */

    clickAllowCheckOutDrpDwn() {
        basePage.clickOnWebElement_Force(this.elements.allowCheckOutDropdown())
    }


    /**
   * 
   * click  third option in allow check-out dropdown button 
   */

    clickAllowCheckOutDrpDwnThirdOptn() {
        basePage.clickOnWebElement(this.elements.allowCheckOutDropdownThirdCheckbox())
    }

    /**
    * 
    * click  second option in allow check-out dropdown button 
    */

    clickAllowCheckOutDrpDwnSecondOptn() {
        basePage.clickOnWebElement(this.elements.allowCheckOutDropdownSecondCheckbox())
    }


    /**
    * 
    * click  save changes button for account 
    */

    clickSaveChangesBtn() {
        basePage.clickOnWebElement(this.elements.saveChangesBtn())
    }

     /**
    * 
    * click  more option button for first listed account 
    */

     clickMoreOptionBtnForFirstAccount() {
        basePage.clickOnWebElement(this.elements.moreOptionForAccount().first())
    }

      /**
    * 
    * click  refresh listing under more option button for account 
    */

      clickRefreshListing() {
        basePage.clickOnWebElement(this.elements.refreshListingOptn())
    }

    /**
    * 
    * click edit button for first group
    */

    clickEditBtnForFirstGrp() {
        basePage.clickOnWebElement(this.elements.editGroupBtn().first())
    }

    /**
    * 
    * click minimum stay toggle button
    */

    clickMinmStayToggleBtn() {
        basePage.clickOnWebElement(this.elements.minmStayToggleBtn())
    }

     /**
    * 
    * click group tab button
    */

     clickGroupTab() {
        basePage.clickOnWebElement(this.elements.groupTabBtn())
    }

     /**
    * 
    * click create group button
    */

     clickCreateGroupBtn() {
        basePage.clickOnWebElement(this.elements.createGrpBtn())
    }

       /**
    * 
    * click create button under create group dialog box
    */

       clickCreateBtnUnderDialog() {
        basePage.clickOnWebElement(this.elements.createBtnUnderCreateGrpDialog())
    }

      /**
    * 
    *fill group name
    */

    fillGroupName(name){
        basePage.fillTextBox(this.elements.createGrpInputBoxUnderCreateGrpDialog(),name)
    }

       /**
    * 
    * click created group more option
    */

       clickCreatedGrpNameMoreOption(grp) {
        basePage.clickOnWebElement(this.elements.createdGrpNameMoreOption(grp))
    }

       /**
    * 
    * click delete group option under created group more option
    */

       clickDeleteGroupUnderCreatedGrpNameMoreOption(grp) {
        basePage.clickOnWebElement(this.elements.createdGrpNameDeleteOptnUnderMoreOption(grp))
    }

       /**
    * 
    * click delete button under delete group popup
    */

       clickDeleteBtnUnderDeleteGrpPopup() {
        basePage.clickOnWebElement(this.elements.deleteBtnUnderDeleteGrpDialog())
    }

}

export default new CustomizationPage
