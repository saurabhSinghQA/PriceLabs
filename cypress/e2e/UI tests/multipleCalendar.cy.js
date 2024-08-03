import pricingDashboard from '../../support/pageObjects/PricingDashboardPage'
import multiCalendar from '../../support/pageObjects/MultiCalendarPage'

describe('Multile Calendar Feature', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
  
  cy.loginToPL(Cypress.env('username'),Cypress.env('password'));
  //navigating to multi calendar page
  pricingDashboard.click_dropdown_dynamicPricing();
  pricingDashboard.click_option_multicalendar_under_dynamicPricing_dropdown();
  cy.url().should('include', 'multicalendar');
 })
  
 //functional case
  it('Verify sync toggle ON and OFF feature', () => {
    
    multiCalendar.clickFirstSyncToggle();
    multiCalendar.elements.syncOFFAlertText().should('have.text','We have stopped updating your prices.');  //OFF

    multiCalendar.clickFirstSyncToggle();
    multiCalendar.elements.syncONSuccessText().should('be.visible').contains('Your prices are scheduled to be updated overnight.'); //ON
  })

  //functional/end-to-end case
  it('Verify edit customization success for particular listing name', () => {
    
    multiCalendar.clickFirstListingMoreOptionBtn();
    multiCalendar.elements.editCustomizationOption().should('be.visible');
    multiCalendar.clickEditCustomizationUnderMoreOption();
    multiCalendar.elements.dialogBox().should('be.visible');
    multiCalendar.fillMinmStayWeekDays(3);
    multiCalendar.fillMinmStayWeekend(6);
    multiCalendar.clickSaveChangesBtn();
    multiCalendar.elements.successText().should('have.text','Successfully Updated Customization'); 

  })

  
  //functional/end-to-end case
  it('Verify adding note to particular listing', () => {
    
    multiCalendar.clickFirstListingAddnoteBtn();
    multiCalendar.elements.addNoteBtnDialogbox().should('be.visible');
    multiCalendar.fillNote('This is note');
    multiCalendar.clickSavenoteBtn();
    multiCalendar.elements.successText().should('have.text','Note has been successfully added for Imp7'); 

  })
   
   
  //negative scenario
  it('Verify alert text to ON the sync toggle to green before clicking sync now button', () => {
    
    multiCalendar.clickSecondSyncNowBtn();
    multiCalendar.elements.errorAlertMsg().should('have.text','Please toggle the switch under "Sync Prices" to green(ON) to sync your prices overnight.'); 

  })

  //negative scenario
  it('Verify review alert text prior to override setting', () => {
    
    multiCalendar.clickThirdCheckboxListingName();
    multiCalendar.elements.applyOverrideBtn().should('be.visible');
    multiCalendar.clickApplyOverrideBtn();
    multiCalendar.elements.errorAlertMsg().should('have.text','Please review prices prior to setting an override!'); 

  })

   //negative scenario
   it.only('Verify alert message after clicking on add price button without filling data in override dialog box', () => {
    
    multiCalendar.clickFourthCheckboxListingName();
    multiCalendar.elements.applyOverrideBtn().should('be.visible');
    multiCalendar.clickApplyOverrideBtn();
    multiCalendar.elements.dialogBox().should('be.visible');
    multiCalendar.clickAddPricingBtn();
    multiCalendar.elements.errorAlertMsg().should('have.text','Please enter dates'); 

  })

})