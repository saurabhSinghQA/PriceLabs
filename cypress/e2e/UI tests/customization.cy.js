import pricingDashboard from '../../support/pageObjects/PricingDashboardPage'
import customization from '../../support/pageObjects/CustomizationsPage'

describe('Customizations Feature', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
  
  cy.loginToPL(Cypress.env('username'),Cypress.env('password'));
  //navigating to multi calendar page
  pricingDashboard.click_dropdown_dynamicPricing();
  pricingDashboard.click_option_customizations_under_dynamicPricing_dropdown();
  cy.url().should('include', 'customization');
 })
  
 //functional/End-to-end case
  it.only('Verify successful editing account', () => {
     
     customization.clickEditBtn();
     customization.elements.dialogBox().should('be.visible');
     
     //selecting checkIn days
     customization.clickAllowCheckInDrpDwn();
     customization.elements.allowCheckInDropdownThirdCheckbox().should('be.visible');
     customization.clickAllowCheckInDrpDwnThirdOptn();
     customization.elements.allowCheckInDropdownSecondCheckbox().should('be.visible');
     customization.clickAllowCheckInDrpDwnThirdOptn();

     //selecting checkout days
     customization.clickAllowCheckOutDrpDwn();
     customization.elements.allowCheckOutDropdownThirdCheckbox().should('be.visible');
     customization.clickAllowCheckOutDrpDwnThirdOptn();
     customization.elements.allowCheckOutDropdownSecondCheckbox().should('be.visible');
     customization.clickAllowCheckOutDrpDwnSecondOptn();

     //click save changes
     customization.clickSaveChangesBtn();
     customization.elements.toastMsg().should('have.text','Successfully Updated Customization'); //verify save success msg
     
  })

  //functional case
  it.only('Verify successful refresh listing', () => {
     
    customization.clickMoreOptionBtnForFirstAccount();
    customization.elements.refreshListingOptn().should('be.visible');
    customization.clickRefreshListing();
    customization.elements.toastMsg().should('have.text','Your bulk refresh has been initiated!'); 
    
 })

 //negative case
 it('Verify error text when click save changes for group without fulfilling minimum stay requirement', () => {
     
    customization.clickGroupTab();  //click group tab on customization
    
    customization.clickEditBtnForFirstGrp()
    customization.elements.dialogBox().should('be.visible');
    customization.elements.minmStayToggleBtn().should('be.visible');
    customization.clickMinmStayToggleBtn();

    customization.clickSaveChangesBtn();
    customization.elements.toastMsg().should('have.text','Please resolve the errors highlighted in red box and then proceed to save. For more information, please hover over the red boxes.'); 
    
 })

 //negative case
 it('Verify error text when click create button for group without entering group name', () => {
     
    customization.clickGroupTab();  //click group tab on customization
    
    customization.clickCreateGroupBtn()
    customization.elements.dialogBoxForCreateGrp().should('be.visible');

    customization.clickCreateBtnUnderDialog();

    customization.elements.toastMsg().should('have.text','Please add a group name'); 
    
 })

 //functional/end-to-end case
 it('Verify creating group name', () => {
    
    const randomGroupName = Math.random().toString(36).substring(2,15)+"group_Name"
    
    customization.clickGroupTab();  //click group tab on customization
    
    customization.clickCreateGroupBtn()
    customization.elements.dialogBoxForCreateGrp().should('be.visible');

    //entering random group number
    customization.fillGroupName(randomGroupName);

    customization.clickCreateBtnUnderDialog();

    customization.elements.createdGrpNameBtn(randomGroupName).should('be.visible'); 
    
 })

 //functional/end-to-end case
 it('Verify creating and deleting group name', () => {
    
    const randomGroupName = Math.random().toString(36).substring(2,15)+"group_Name"
    
    customization.clickGroupTab();  //click group tab on customization
    
    //creating group
    customization.clickCreateGroupBtn()
    customization.elements.dialogBoxForCreateGrp().should('be.visible');

    //entering random group number
    customization.fillGroupName(randomGroupName);

    customization.clickCreateBtnUnderDialog();

    customization.elements.createdGrpNameBtn(randomGroupName).should('be.visible'); //verify group created

    //deleting group

    customization.clickCreatedGrpNameMoreOption(randomGroupName);
    customization.elements.createdGrpNameDeleteOptnUnderMoreOption(randomGroupName).should('be.visible'); 
    customization.clickDeleteGroupUnderCreatedGrpNameMoreOption(randomGroupName);
    customization.elements.dialogBoxForDeletGroup().should('be.visible'); 
    customization.clickDeleteBtnUnderDeleteGrpPopup();

    customization.elements.createdGrpNameBtn(randomGroupName).should('not.be.visible'); //verify group deleted
    
 })

  
})