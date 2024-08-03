import basePage from "../pageObjects/BasePage"

/**
 * Represents the pricing dashboard page of PriceLabs application
 * This class encapsulates methos and elements specific to pricing dashboard functionality.
 */

class PricingDashboad{

   //elements on pricing dashboard page
   elements={
        
        dynamicPricingdrpdwn : () => cy.get('a[qa-id=nav-item-title]'),
        multiCalendarOptnUnderDrpdwn : () => cy.get('a[href*=multicalendar]'),
        customizationOptnUnderDrpdwn : () => cy.get('a[qa-id=nav-item-title]+ul>li>a[href*=customization]'),
    }



   //operations :::

     /**
    * 
    * click dynamic pricing dropdown on pricing dashboard page 
    */

     click_dropdown_dynamicPricing(){
        basePage.clickOnWebElement(this.elements.dynamicPricingdrpdwn())
    }

       /**
    * 
    * click multi calendar option under dynamic pricing dropdown on pricing dashboard page 
    */

       click_option_multicalendar_under_dynamicPricing_dropdown(){
        basePage.clickOnWebElement(this.elements.multiCalendarOptnUnderDrpdwn())
    }

      /**
    * 
    * click customizations option under dynamic pricing dropdown on pricing dashboard page 
    */

      click_option_customizations_under_dynamicPricing_dropdown(){
         basePage.clickOnWebElement(this.elements.customizationOptnUnderDrpdwn())
     }
   
   
   }
   
   export default new PricingDashboad