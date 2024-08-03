import basePage from "../pageObjects/BasePage"

/**
 * Represents the multicalendar page of PriceLabs application
 * This class encapsulates methos and elements specific to mutlicalendar functionality.
 */

class MultiCalendarPage{

   //elements on Multicalendar page
   elements={
        
        syncPriceToggleBtn : () => cy.get('input[class=chakra-switch__input]'),
        syncOFFAlertText : () => cy.get('div[class*=alert]>div>p>div'),
        syncONSuccessText : () => cy.get('div[data-status="success"]>p'),
        syncNowBtn : () => cy.get('button[aria-label="Sync Now"]'),
        errorAlertMsg : () => cy.get('div[class*=alert]>div>p'),
        listingNameCheckbox : () => cy.get('tr[data-index="2"]>td>label>input[class=chakra-checkbox__input]'),
        applyOverrideBtn : () => cy.get('[data-testid=TuneOutlinedIcon]+p'),
        fourthCheckboxListingName : () => cy.get('tr[data-index="3"]>td>label>input[class=chakra-checkbox__input]'),
        dialogBox : () => cy.get('div[id*=chakra-modal][role=dialog]'),
        addPricingBtn: () => cy.get('footer>div>div>div>button[class*=chakra-button]'),
        moreOptionBtn: () => cy.get('td>div>div>button[id*=menu-button]'),
        editCustomizationOption : () => cy.get('[data-testid=TuneOutlinedIcon]'),
        minmStayWeekdayInputBox : () => cy.get('input[name=default_minstay_value]'),
        minmStayWeekndInputBox : () => cy.get('input[name=default_minstay_value_weekend]'),
        saveChangesBtn : () => cy.get('button[type=submit]'),
        successText : () => cy.get('div[data-status="success"]>p'),
        addNoteBtn: () => cy.get('td>div>div+div+div>div[id*=popover-trigger]'),
        addNoteBtnDialogbox: () => cy.get('section[role=dialog]>div[id*=popover-body]'),
        addNoteBtnInputbox: () => cy.get('section[role=dialog]>div[id*=popover-body]>div>textarea'),
        saveNoteBtn: () => cy.get('button[qa-id=add-note-save-btn]'),
    }



   //operations :::


     /**
    * 
    * click first sync toggle button 
    */

     clickFirstSyncToggle(){
        basePage.clickOnWebElement_Force(this.elements.syncPriceToggleBtn().first())
    }

    
     /**
    * 
    * click second sync now button 
    */

    clickSecondSyncNowBtn(){
        basePage.clickOnWebElement_Force(this.elements.syncNowBtn().eq(1))
    }

     
     /**
    * 
    * click third checkbox for listing name 
    */

    clickThirdCheckboxListingName(){
        basePage.clickOnWebElement_Force(this.elements.listingNameCheckbox())
    }

     /**
    * 
    * click fourth checkbox for listing name 
    */

    clickFourthCheckboxListingName(){
        basePage.clickOnWebElement_Force(this.elements.fourthCheckboxListingName())
    }

     /**
    * 
    * click Apply override button in the bottom 
    */

    clickApplyOverrideBtn(){
        basePage.clickOnWebElement(this.elements.applyOverrideBtn())
    }

     /**
    * 
    * click Add Pricing button in over ride dialog
    */

     clickAddPricingBtn(){
        basePage.clickOnWebElement(this.elements.addPricingBtn())
    }

      /**
    * 
    * click first listing more option button
    */

      clickFirstListingMoreOptionBtn(){
        basePage.clickOnWebElement(this.elements.moreOptionBtn().first())
    }

      /**
    * 
    * click edit customization under more option
    */

      clickEditCustomizationUnderMoreOption(){
        basePage.clickOnWebElement(this.elements.editCustomizationOption())
    }

      /**
    * 
    *fill minimum stay week day value
    */

      fillMinmStayWeekDays(value){
        basePage.fillTextBox(this.elements.minmStayWeekdayInputBox(),value)
    }

      /**
    * 
    *fill minimum stay weekend value
    */

    fillMinmStayWeekend(value){
        basePage.fillTextBox(this.elements.minmStayWeekndInputBox(),value)
    }

    /**
    * 
    * click save changes button
    */

    clickSaveChangesBtn(){
        basePage.clickOnWebElement(this.elements.saveChangesBtn())
    }

     /**
    * 
    * click first listing add note button
    */

     clickFirstListingAddnoteBtn(){
        basePage.clickOnWebElement(this.elements.addNoteBtn().first())
    }

    /**
    * 
    * fill note
    */

    fillNote(note){
        basePage.fillTextBox(this.elements.addNoteBtnInputbox(),note)
    }

     /**
    * 
    * click save note button
    */

     clickSavenoteBtn(){
        basePage.clickOnWebElement(this.elements.saveNoteBtn())
    }
   
   
   }
   
   export default new MultiCalendarPage